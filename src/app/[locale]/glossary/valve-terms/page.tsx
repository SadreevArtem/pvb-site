import {
  accordeonItemsA,
  accordeonItemsB,
  accordeonItemsC,
  accordeonItemsD,
  accordeonItemsE,
  accordeonItemsF,
  accordeonItemsG,
  accordeonItemsH,
  accordeonItemsI,
  accordeonItemsK,
  accordeonItemsL,
  accordeonItemsM,
  accordeonItemsN,
  accordeonItemsO,
  accordeonItemsP,
  accordeonItemsQ,
  accordeonItemsS,
  accordeonItemsT,
  accordeonItemsU,
  accordeonItemsV,
  accordeonItemsW,
  accordeonItemsX,
  accordeonItemsY,
} from "@/app/static/valve-terms";
import { AppAccordionGroupWrapper } from "@/components/AppAccordionGroupWrapper/AppAccordionGroupWrapper";
import { BackToTopButton } from "@/components/BackToTopButton/BackToTopButton";
import { Feedback } from "@/components/Feedback/Feedback";
import { GlossaryLinks } from "@/components/GlossaryLinks/GlossaryLinks";
import { Metadata } from "next";
import { useLocale, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Клапаны: термины и определения | Курсы по запорной арматуре",
  description:
    "Раздел 1: Термины и определения клапанов. Изучайте ключевые понятия и названия элементов запорной арматуры для профессионалов отрасли.",
};

const Consultation = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const localActive = useLocale();
  const t = useTranslations("ValveTermsPage");
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
        <h1 className="md:text-[48px] md:ml-[260px] text-[36px] text-primary font-bold">
          {t("title")}
        </h1>
      </div>
      <div className="container mb-8 text-[18px] text-grayText">
        <GlossaryLinks />
        <p id="A" className="title md: text-[48px] md:ml-[160px]">
          {"A"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsA}
          />
        </div>
        <p id="B" className="title md: text-[48px] md:ml-[160px]">
          {"B"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsB}
          />
        </div>
        <p id="C" className="title md: text-[48px] md:ml-[160px]">
          {"C"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsC}
          />
        </div>
        <p id="D" className="title md: text-[48px] md:ml-[160px]">
          {"D"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsD}
          />
        </div>
        <p id="E" className="title md: text-[48px] md:ml-[160px]">
          {"E"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsE}
          />
        </div>
        <p id="F" className="title md: text-[48px] md:ml-[160px]">
          {"F"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsF}
          />
        </div>
        <p id="G" className="title md: text-[48px] md:ml-[160px]">
          {"G"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsG}
          />
        </div>
        <p id="H" className="title md: text-[48px] md:ml-[160px]">
          {"H"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsH}
          />
        </div>
        <p id="I" className="title md: text-[48px] md:ml-[160px]">
          {"I"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsI}
          />
        </div>
        <p id="K" className="title md: text-[48px] md:ml-[160px]">
          {"K"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsK}
          />
        </div>
        <p id="L" className="title md: text-[48px] md:ml-[160px]">
          {"L"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsL}
          />
        </div>
        <p id="M" className="title md: text-[48px] md:ml-[160px]">
          {"M"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsM}
          />
        </div>
        <p id="N" className="title md: text-[48px] md:ml-[160px]">
          {"N"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsN}
          />
        </div>
        <p id="O" className="title md: text-[48px] md:ml-[160px]">
          {"O"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsO}
          />
        </div>
        <p id="P" className="title md: text-[48px] md:ml-[160px]">
          {"P"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsP}
          />
        </div>
        <p id="Q" className="title md: text-[48px] md:ml-[160px]">
          {"Q"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsQ}
          />
        </div>
        <p id="R" className="title md: text-[48px] md:ml-[160px]">
          {"R"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsQ}
          />
        </div>
        <p id="S" className="title md: text-[48px] md:ml-[160px]">
          {"S"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsS}
          />
        </div>
        <p id="T" className="title md: text-[48px] md:ml-[160px]">
          {"T"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsT}
          />
        </div>
        <p id="U" className="title md: text-[48px] md:ml-[160px]">
          {"U"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsU}
          />
        </div>
        <p id="V" className="title md: text-[48px] md:ml-[160px]">
          {"V"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsV}
          />
        </div>
        <p id="W" className="title md: text-[48px] md:ml-[160px]">
          {"W"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsW}
          />
        </div>
        <p id="X" className="title md: text-[48px] md:ml-[160px]">
          {"X"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsX}
          />
        </div>
        <p id="Y" className="title md: text-[48px] md:ml-[160px]">
          {"Y"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsY}
          />
        </div>

        <div className="md:ml-[160px] mt-4">
          <ul>
            <li className="indent-8">
              <Link
                className="header-link"
                href={`/${localActive}/glossary/valve-terms`}
              >
                {t("link1")}
              </Link>
            </li>
            <li className="indent-8">
              <Link
                className="header-link"
                href={`/${localActive}/glossary/control-terms`}
              >
                {t("link2")}
              </Link>
            </li>
            <li className="indent-8">
              <Link
                className="header-link"
                href={`/${localActive}/glossary/commercial-terms`}
              >
                {t("link3")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Feedback />
      <BackToTopButton label={t("backToTop")} />
    </div>
  );
};

export default Consultation;
