import { accordeonItemsA, accordeonItemsB } from "@/app/static";
import { AppAccordionGroup } from "@/components/AppAccordionGroup/AppAccordionGroup";
import { AppAccordionGroupWrapper } from "@/components/AppAccordionGroupWrapper/AppAccordionGroupWrapper";
import { Feedback } from "@/components/Feedback/Feedback";
import { GlossaryLinks } from "@/components/GlossaryLinks/GlossaryLinks";
import { useLocale, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          <AppAccordionGroupWrapper items={accordeonItemsA} />
        </div>
        <p id="B" className="title md: text-[48px] md:ml-[160px]">
          {"B"}
        </p>
        <div className="mt-8">
          <AppAccordionGroupWrapper items={accordeonItemsB} />
        </div>
        {/* {Array.from({ length: 25 }, (_, i) => i + 1).map((n) => (
          <div className="md:ml-[160px]" key={n}>
            <p className="title">{t(`t${n}`)}</p>
            <ul>
              <li className="indent-8">{t(`p${n}`)}</li>
            </ul>
          </div>
        ))} */}
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
    </div>
  );
};

export default Consultation;
