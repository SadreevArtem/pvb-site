'use client'
import React, { useState } from 'react'
import { Tabs } from './components/Tabs/Tabs';

const AboutContent: {
    [key: string]: string;
} = {
  Overview: "Наша компания помогает разобраться в области производства и поставок запорной арматуры со всего мира. В независимости от опыта работы вашей компании, в кооперации с нами мы сможем усилить те или иные стратегии вашего бизнеса, наладить цифровые сервисы в области качества и обучить ваш персонал основам мира клапанов.",
  Experience: "Experience",
  Contacts: "Contacts",
};

export const AboutPageTabs = () => {
    const [tab, setTab]= useState<string>("Overview");
  return (
    <div className='container flex gap-8 mt-8 flex-col md:flex-row text-[#333738] pb-12'>
        <Tabs currentTab={tab} setTab={setTab} categories={Object.keys(AboutContent)}/>
        <div>
            <p>{AboutContent[tab]}</p>
        </div>
    </div>
  )
}
