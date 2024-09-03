import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react'

 const Policy = (
  {
    params: { locale },
  }: {
    params: { locale: string };
  }) =>{
    unstable_setRequestLocale(locale);

    const t = useTranslations("PolicyPage")
  return (
    <div className='min-h-[50vh] mt-[140px]'>
        <div className='container'>
            <h1 className='text-[48px] text-primary font-bold'>{t("title")}</h1>
        </div>
    </div>
  )
}


export default Policy;