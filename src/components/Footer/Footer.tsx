import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Footer = () => {
    const t = useTranslations("Footer")
  return (
    
    <footer className="w-full py-4 md:mt-[60px] mt-4 xxl:px-24 max-sm:hidden mb-[64px]">
      <div className="container grid md:grid-cols-4 md:gap-8 gap-4">
        <Link href="/" className="relative block shrink-0">
          <Image
            src="/logo-pvb.svg"
            alt="logo"
            width={180}
            height={100}
            className=" max-md:h-[80px] relative max-md:-left-4"
          />
        </Link>
        <div className="flex flex-col gap-2">
            <h3 className="text-primary font-extrabold uppercase text-[24px] mb-3">{t('link1')}</h3>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка</span>
            </Link>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка 2</span>
            </Link>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка 3</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
          <h3 className="text-primary font-extrabold uppercase text-[24px] mb-3">{t('link2')}</h3>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка</span>
            </Link>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка 2</span>
            </Link>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка 3</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
          <h3 className="text-primary font-extrabold uppercase text-[24px] mb-3">{t('link3')}</h3>
          <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка</span>
            </Link>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка 2</span>
            </Link>
            <Link className='text-grayText hover:text-black'href={"/"}>
              <span>Ссылка 3</span>
            </Link>
          </div>
      </div>
    </footer>
  );
}


export default Footer;