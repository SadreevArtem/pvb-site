"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { Tabs } from "../AboutPageTabs/components/Tabs/Tabs";
import { useTranslations } from "next-intl";

const PROGRAM_TABS = ["pvb-u", "pvb-control", "pvb-SpecFlow"] as const;

export const ProgramsPageTabs = () => {
  const t = useTranslations("ProgramsPage");
  const [tab, setTab] = useState<string>("pvb-u");
  const contentKey = `${tab}Text` as
    | "pvb-uText"
    | "pvb-controlText"
    | "pvb-SpecFlowText";
  return (
    <div className="container flex gap-8 mt-8 flex-col md:flex-row text-[#333738] pb-12">
      <Tabs
        currentTab={tab}
        setTab={setTab}
        categories={[...PROGRAM_TABS]}
        pageName="ProgramsPage"
      />
      <div>
        <p
          className={clsx("text-[18px] text-grayText indent-8", {
            "whitespace-pre indent-0": tab === "Contacts",
          })}
        >
          {t(contentKey)}
        </p>
      </div>
    </div>
  );
};
