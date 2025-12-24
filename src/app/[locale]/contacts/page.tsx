import { Feedback } from '@/components/Feedback/Feedback';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

 const Contacts = (
  {
    params: { locale },
  }: {
    params: { locale: string };
  }) =>{
    setRequestLocale(locale);

    const t = useTranslations("ContactsPage")
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
        <h1 className="md:text-[72px] md:ml-[260px] text-[36px] text-primary font-bold">
          {t("title")}
        </h1>
      </div>
      <div className="container mb-8 text-[18px] text-grayText">
      <div className='flex flex-col gap-[12px] md:ml-[260px]'>
          <Link href="/" className="relative block shrink-0">
            <Image
              src="/logo-max.png"
              alt="logo"
              width={220}
              height={100}
              className="relative max-md:-left-4"
            />
          </Link>
          <p className='block'>© 2024 ИП Бондаренко В. В.</p>
          <p className='block'>Procurement Victor Bondarenko</p>
          <p className='block'>ИНН 503212020713</p>
          <p className='block'>E-mail: <Link className='text-link' href={"mailto:info@ppvb.pro"}>info@ppvb.pro</Link></p>
        </div>
      </div>

      <Feedback />
    </div>
  )
}


export default Contacts;