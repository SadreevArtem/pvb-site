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
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === "ru"
    ? {
        title: "Клапаны: термины и определения | PVB",
        description: "Ключевые термины и определения элементов промышленной арматуры.",
      }
    : {
        title: "Valve terms and definitions | PVB",
        description: "Key industrial valve terms, component names, and professional definitions.",
      };
}

const Consultation = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setRequestLocale(locale);
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
        <h1 className="page-title page-title-offset">
          {t("title")}
        </h1>
      </div>
      <div className="container mb-8 text-[18px] text-grayText">
        <GlossaryLinks />
        <p id="A" className="glossary-letter-title">
          {"A"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsA}
          />
        </div>
        <p id="B" className="glossary-letter-title">
          {"B"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsB}
          />
        </div>
        <p id="C" className="glossary-letter-title">
          {"C"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsC}
          />
        </div>
        <p id="D" className="glossary-letter-title">
          {"D"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsD}
          />
        </div>
        <p id="E" className="glossary-letter-title">
          {"E"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsE}
          />
        </div>
        <p id="F" className="glossary-letter-title">
          {"F"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsF}
          />
        </div>
        <p id="G" className="glossary-letter-title">
          {"G"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsG}
          />
        </div>
        <p id="H" className="glossary-letter-title">
          {"H"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsH}
          />
        </div>
        <p id="I" className="glossary-letter-title">
          {"I"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsI}
          />
        </div>
        <p id="K" className="glossary-letter-title">
          {"K"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsK}
          />
        </div>
        <p id="L" className="glossary-letter-title">
          {"L"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsL}
          />
        </div>
        <p id="M" className="glossary-letter-title">
          {"M"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsM}
          />
        </div>
        <p id="N" className="glossary-letter-title">
          {"N"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsN}
          />
        </div>
        <p id="O" className="glossary-letter-title">
          {"O"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsO}
          />
        </div>
        <p id="P" className="glossary-letter-title">
          {"P"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsP}
          />
        </div>
        <p id="Q" className="glossary-letter-title">
          {"Q"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsQ}
          />
        </div>
        <p id="R" className="glossary-letter-title">
          {"R"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsQ}
          />
        </div>
        <p id="S" className="glossary-letter-title">
          {"S"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsS}
          />
        </div>
        <p id="T" className="glossary-letter-title">
          {"T"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsT}
          />
        </div>
        <p id="U" className="glossary-letter-title">
          {"U"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsU}
          />
        </div>
        <p id="V" className="glossary-letter-title">
          {"V"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsV}
          />
        </div>
        <p id="W" className="glossary-letter-title">
          {"W"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsW}
          />
        </div>
        <p id="X" className="glossary-letter-title">
          {"X"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="ValveTermsPage"
            items={accordeonItemsX}
          />
        </div>
        <p id="Y" className="glossary-letter-title">
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
