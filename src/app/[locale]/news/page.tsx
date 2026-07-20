import { Feedback } from '@/components/Feedback/Feedback';
import { NEWS } from '@/components/NewsBlock/static';
import { NewsCard } from '@/components/NewsCard/NewsCard';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import React from 'react'



 const News = (
  {
    params: { locale },
  }: {
    params: { locale: string };
  }) =>{
    setRequestLocale(locale);
    const t = useTranslations("NewsPage")
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
    <div className="container my-8 text-[18px] text-grayText grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
     {NEWS.map((news) => <NewsCard key={news.name} item={news} locale={locale} readLabel={t("read")}/>)}
    </div>

    <Feedback />
  </div>
  )
}


export default News;
