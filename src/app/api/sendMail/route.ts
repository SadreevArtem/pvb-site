// /app/api/sendMail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Настройка SMTP-транспортера
  const transporter = nodemailer.createTransport({
    service: 'Mail.ru', // используйте другой сервис, если нужно
    auth: {
      user: process.env.EMAIL_USER, // логин от почтового клиента
      pass: process.env.EMAIL_PASS, // пароль от почтового клиента
    },
  });

  try {
    // Отправка письма
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Отправитель
      to: [process.env.EMAIL_TO as string, process.env.EMAIL_ADMIN as string], // Получатель
      subject: `Новое сообщение от ${name}`,
      text: message,
      html: `<p><strong>Имя:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Сообщение:</strong> ${message}</p>`,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
