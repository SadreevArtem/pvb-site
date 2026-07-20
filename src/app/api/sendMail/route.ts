import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_REQUEST_SIZE = 20_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );

const isRateLimited = (identifier: string) => {
  const now = Date.now();
  const current = rateLimitStore.get(identifier);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
};

const isValidEmail = (email: string) =>
  email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_SIZE) {
    return NextResponse.json({ message: "Request is too large" }, { status: 413 });
  }

  const host = request.headers.get("host");
  const origin = request.headers.get("origin");
  if (host && origin) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ message: "Invalid origin" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ message: "Invalid origin" }, { status: 403 });
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const website = typeof payload.website === "string" ? payload.website.trim() : "";

  // Bots commonly fill hidden fields. Return a neutral response without sending mail.
  if (website) {
    return NextResponse.json({ message: "Email sent successfully" });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    name.length < 2 ||
    name.length > 100 ||
    !isValidEmail(email) ||
    message.length < 10 ||
    message.length > 5000 ||
    payload.consent !== true
  ) {
    return NextResponse.json({ message: "Invalid form data" }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientAddress =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const identifier = `${clientAddress}:${email.toLowerCase()}`;
  if (isRateLimited(identifier)) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const recipients = [process.env.EMAIL_TO, process.env.EMAIL_ADMIN].filter(
    (recipient): recipient is string => Boolean(recipient),
  );

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || recipients.length === 0) {
    console.error("Email transport environment variables are not configured");
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: "Mail.ru",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients,
      replyTo: email,
      subject: `Новое сообщение от ${name.replace(/[\r\n]/g, " ")}`,
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
      html: [
        `<p><strong>Имя:</strong> ${escapeHtml(name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        `<p><strong>Сообщение:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      ].join(""),
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send feedback email", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
