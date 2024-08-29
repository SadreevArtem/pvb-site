import { AbotBlock } from "@/components/AboutBlock/AboutBlock";
import { Banner } from "@/components/Banner/Banner";
import { NewsBlock } from "@/components/NewsBlock/NewsBlock";
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
    <main className="min-h-screen">
      <Banner images={[{ url: "/banner3.png" }, { url: "/banner.png" }]} />
      <AbotBlock />
      <NewsBlock />
    </main>
  );
}
