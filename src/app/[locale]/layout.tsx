import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/Header";
import { locales } from "@/i18n";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import { CookieNotice } from "@/components/CookieNotice/CookieNotice";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const isRussian = locale === "ru";
  const title = isRussian
    ? "PVB — обучение и консультации по промышленной арматуре"
    : "PVB — industrial valve training and consulting";
  const description = isRussian
    ? "Профессиональные консультации, обучение и программные решения для специалистов по промышленной арматуре."
    : "Professional consulting, training, and software solutions for industrial valve specialists.";

  return {
  title,
  description,
  metadataBase: new URL("https://ppvb.pro"),

  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Манифест и мобильные настройки
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "PVB",
    statusBarStyle: "default",
  },

  // OpenGraph (соцсети)
  openGraph: {
    type: "website",
    locale: isRussian ? "ru_RU" : "en_US",
    title,
    description,
    // images: [{ url: '/og-image.jpg' }], // добавьте, если есть картинка
  },

  // Дополнительные мета-теги
  other: {
    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
  },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <CookieNotice />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
