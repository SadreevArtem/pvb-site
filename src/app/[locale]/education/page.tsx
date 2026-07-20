import { Feedback } from "@/components/Feedback/Feedback";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Metadata } from "next";
import React from "react";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === "ru"
    ? {
        title: "Курсы и обучение работе с запорной арматурой",
        description: "Курсы и практическое обучение для специалистов по промышленной арматуре.",
      }
    : {
        title: "Industrial valve courses and training",
        description: "Professional courses and practical training for industrial valve specialists.",
      };
}

const Education = ({ params: { locale } }: { params: { locale: string } }) => {
  setRequestLocale(locale);
  const t = useTranslations("EducationPage");
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
      <div className="container mb-8 text-[18px] text-grayText">
        <div className="md:ml-[160px]">
          <p className="title">
            {t("description")}
          </p>
          <ul>
            {Array.from({ length: 7 }, (_, index) => (
              <li key={index}>— {t(`course${index + 1}`)}</li>
            ))}
          </ul>
        </div>
      </div>

      <Feedback />
    </div>
  );
};

export default Education;
