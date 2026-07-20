'use client'
import React, { useState } from 'react'
import { Tabs } from './components/Tabs/Tabs';
import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ABOUT_TABS = ["Overview", "Experience", "Contacts"] as const;

export const AboutPageTabs = () => {
  const t = useTranslations("AboutPage");
  const [tab, setTab]= useState<string>("Overview");

  const contentKey = {
    Overview: "overviewText",
    Experience: "experienceText",
    Contacts: "contactsText",
  }[tab] as "overviewText" | "experienceText" | "contactsText";

  return (
    <div className="container flex gap-8 mt-8 flex-col md:flex-row text-[#333738] pb-12">
      <Tabs
        currentTab={tab}
        setTab={setTab}
        categories={[...ABOUT_TABS]}
        pageName="AboutPage"
      />
      <div className='max-lg:flex flex-col gap-8'>
        <div className={clsx('relative lg:w-[350px] lg:h-[380px] float-left lg:mr-8', {"hidden": tab === "Contacts"})}>
          <Image src={tab==="Overview"?"/about.jpeg":"/about2.jpeg"} alt="" width={1280} height={960} className='object-cover h-full'/>
        </div>
        <p
          className={clsx("text-[18px] text-grayText indent-8", {
            "whitespace-pre !indent-0": tab === "Contacts",
          })}
        >
          {t(contentKey)}
        </p>
      </div>
    </div>
  );
}
