import { AboutBlock } from "@/components/AboutBlock/AboutBlock";
import { Banner } from "@/components/Banner/Banner";
import { EducationBlock } from "@/components/EducationBlock/EducationBlock";
import { Feedback } from "@/components/Feedback/Feedback";
import { NewsBlock } from "@/components/NewsBlock/NewsBlock";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "PVB",
  description: "site pvb",
};

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <main className="min-h-screen">
      <Banner images={[{ url: "/banner3.png" }, { url: "/banner.png" }]} locale={locale} />
      <AboutBlock locale={locale}/>
      <NewsBlock locale={locale}/>
      <EducationBlock locale={locale}/>
      <Feedback />
    </main>
  );
}
