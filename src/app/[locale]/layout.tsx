import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import { Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header/Header";
import { locales } from '@/i18n';
import Footer from '@/components/Footer/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Настраиваешь веса, которые тебе нужны
});


export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


