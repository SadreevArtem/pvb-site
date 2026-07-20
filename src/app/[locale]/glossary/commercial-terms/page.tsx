import {
  accordeonItemsA,
  accordeonItemsB,
  accordeonItemsC,
  accordeonItemsD,
  accordeonItemsE,
  accordeonItemsF,
  accordeonItemsI,
  accordeonItemsL,
  accordeonItemsP,
} from "@/app/static/commercial-terms";
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
        title: "Коммерческие термины в сфере арматуры | PVB",
        description: "Понятия и определения для закупок, поставок и продаж промышленной арматуры.",
      }
    : {
        title: "Commercial valve industry terms | PVB",
        description: "Commercial terms for industrial valve procurement, supply, and sales.",
      };
}

const CommercialTerms = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  setRequestLocale(locale);
  const localActive = useLocale();
  const t = useTranslations("CommercialTermsPage");
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
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsA}
          />
        </div>
        <p id="B" className="glossary-letter-title">
          {"B"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsB}
          />
        </div>
        <p id="C" className="glossary-letter-title">
          {"C"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsC}
          />
        </div>
        <p id="D" className="glossary-letter-title">
          {"D"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsD}
          />
        </div>
        <p id="E" className="glossary-letter-title">
          {"E"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsE}
          />
        </div>
        <p id="F" className="glossary-letter-title">
          {"F"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsF}
          />
        </div>
        <p id="I" className="glossary-letter-title">
          {"I"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsI}
          />
        </div>

        <p id="L" className="glossary-letter-title">
          {"L"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsL}
          />
        </div>

        <p id="P" className="glossary-letter-title">
          {"P"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper
            currentTranslate="CommercialTermsPage"
            items={accordeonItemsP}
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

export default CommercialTerms;
