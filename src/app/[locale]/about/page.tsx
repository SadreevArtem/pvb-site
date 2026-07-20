import { AboutPageTabs } from "@/components/AboutPageTabs/AboutPageTabs";
import { Feedback } from "@/components/Feedback/Feedback";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import React from "react";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === "ru"
    ? { title: "О компании PVB", description: "Опыт и компетенции команды PVB в сфере промышленной арматуры." }
    : { title: "About PVB", description: "PVB team's experience and expertise in the industrial valve sector." };
}

const About = ({ params: { locale } }: { params: { locale: string } }) => {
  setRequestLocale(locale);

  const t = useTranslations("AboutPage");
  return (
    <div className="min-h-[50vh] md:mt-[100px] mt-[86px] bg-white">
      <div className="h-[140px] w-full relative">
        <Image
          src={"/background.png"}
          alt={""}
          width={1000}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mt-6">
        <h1 className="page-title page-title-offset">
          {t("title")}
        </h1>
      </div>
      <AboutPageTabs />
      <Feedback />
    </div>
  );
};

export default About;
