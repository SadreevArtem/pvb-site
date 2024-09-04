'use client'
import React, { useState } from 'react'
import { Tabs } from './components/Tabs/Tabs';

const AboutContent: {
    [key: string]: string;
} = {
  overwiev: "About",
  contacts: "Contacts",
  experience: "Experience",
};

export const AboutPageTabs = () => {
    const [tab, setTab]= useState<string>("overwiev");
  return (
    <div className='container flex gap-8 mt-8'>
        <Tabs currentTab={tab} setTab={setTab} categories={Object.keys(AboutContent)}/>
        <div>
            <p>{AboutContent[tab]}</p>
        </div>
    </div>
  )
}
