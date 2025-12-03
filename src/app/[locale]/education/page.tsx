import { Feedback } from "@/components/Feedback/Feedback";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Курсы и обучение работе с запорной арматурой",
  description:
    "Обучение работе с запорной арматурой: курсы, инструкции и практические занятия для специалистов промышленной сферы.",
};

const Education = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
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
        <h1 className="md:text-[72px] md:ml-[260px] text-[36px] text-primary font-bold">
          {t("title")}
        </h1>
      </div>
      <div className="container mb-8 text-[18px] text-grayText">
        <div className="md:ml-[160px]">
          <p className="title">
            У нас вы можете приобрести курсы по обучению по следующим
            направлениям:{" "}
          </p>
          <ul>
            <li>- Проверка сосудов высокого давления</li>
            <li>- Запорная арматура основы </li>
            <li>- Шаровые краны </li>
            <li>- Инспекция поврежденных механизмов </li>
            <li>- Системы сброса давления </li>
            <li>- Стандарты ASTM </li>
            <li>- Стандарты API </li>
          </ul>
        </div>
      </div>

      <Feedback />
    </div>
  );
};

export default Education;
