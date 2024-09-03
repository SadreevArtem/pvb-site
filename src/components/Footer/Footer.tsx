import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Footer = () => {
  const t = useTranslations("Footer");
  const localActive = useLocale();
  return (
    <footer className="w-full pt-4 md:mt-[60px] mt-4 xxl:px-24 max-sm:hidden">
      <div className="container grid md:grid-cols-4 md:gap-8 gap-4">
        <div className='text-sm flex flex-col gap-[12px]'>
          <Link href="/" className="relative block shrink-0">
            <Image
              src="/logo-pvb.svg"
              alt="logo"
              width={180}
              height={100}
              className=" max-md:h-[80px] relative max-md:-left-4"
            />
          </Link>
          <p className='block'>© 2024 ИП Бондаренко В.В.</p>
          <p className='block'>Procurement Victor Bondarenko</p>
          <p className='block'>ИНН 503212020713</p>
          <p className='block'>E-mail: <Link href={"mailto:pvb@procurementpvb.com"}>pvb@procurementpvb.com</Link></p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-extrabold uppercase text-[24px] mb-3">
            {t("link1")}
          </h3>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>Административная деятельность организации</span>
          </Link>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>Консультация в области клапанов</span>
          </Link>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>Проведение технических аудитов</span>
          </Link>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>Проведение технических переговоров</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-extrabold uppercase text-[24px] mb-3">
            {t("link2")}
          </h3>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>Запорная арматура</span>
          </Link>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>Безопасность на производстве</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-primary font-extrabold uppercase text-[24px] mb-3">
            {t("link3")}
          </h3>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>PVB-U ©</span>
          </Link>
          <Link className="text-grayText hover:text-black" href={"/"}>
            <span>PVB Control ©</span>
          </Link>
        </div>
      </div>
      <div className=" h-[1px] bg-[#797D82] opacity-15 my-4"> </div>
      <div className="container">
        <Link
          className="uppercase md:my-12 my-6 block text-link"
          href={`/${localActive}/policy`}
        >
          {t("linkPolicy")}
        </Link>
      </div>
    </footer>
  );
}


export default Footer;