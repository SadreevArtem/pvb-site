import { AboutPageTabs } from '@/components/AboutPageTabs/AboutPageTabs';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import React from 'react'

 const About = (
  {
    params: { locale },
  }: {
    params: { locale: string };
  }) =>{
    unstable_setRequestLocale(locale);
 
    const t = useTranslations("AboutPage")
  return (
    <div className="min-h-[50vh] md:mt-[100px] mt-[86px]">
      <div className='h-[140px] w-full relative'>
        <Image src={"/background.png"} alt={""} width={1000} height={100} className='object-cover w-full h-full'  />
      </div>
      <div className="container">
        <h1 className="md:text-[72px] text-[36px] text-primary font-bold">{t("title")}</h1>
      </div>
      <AboutPageTabs />
    </div>
  );
}


export default About;