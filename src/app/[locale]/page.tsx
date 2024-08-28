import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "PVB",
  description: "site pvb",
};

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      pvb start пвб старт ТТТТ
    </main>
  );
}
