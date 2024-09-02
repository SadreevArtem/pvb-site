'use client'
import Link from "next/link";
import { Hamburger } from "../Hamburger";
import { useState, useTransition } from "react";
import { HEADER_MENU } from "../Hamburger/static";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";




export default function Header ()  {
  const t = useTranslations('Header');
  const localActive = useLocale();
  const router = useRouter();
  const [_, startTransition] = useTransition();

  const onChangeHandler = ()=> {
    const nextLocale = localActive === 'ru' ? 'en' : 'ru';
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  }
    const [hamburgerActive, setHamburgerActive] = useState(false);
  const onOpen = () => {
    setHamburgerActive(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setHamburgerActive(false);
    document.body.style.removeProperty("overflow");
  };
    return (
      <header className="lg:px-24 header-scroll px-3 fixed top-0 z-10 bg-cover w-full border-b-1 border-[#c7c9c8] lg:h-[100px]">
        <div
          className={
            "container flex items-center justify-between min-h-6 w-full"
          }
        >
          <Link href="/" className="relative block shrink-0">
            <Image
              src="/logo-pvb.svg"
              alt="logo"
              width={130}
              height={100}
              className=" max-md:h-[80px] relative top-[10px] max-md:-left-4"
            />
          </Link>
          <nav className="flex items-center gap-4">
            <ul className="flex md:gap-4 items-center">
              <li>
                <button className="header-link " onClick={onChangeHandler}>
                  {localActive === "ru" ? "EN" : "RU"}
                </button>
              </li>
              {HEADER_MENU.map((menu) => (
                <li key={menu.value}>
                  <Link className="header-link max-md:hidden" href={`/${localActive}${menu.href}`}>
                    {t(menu.value)}
                  </Link>
                </li>
              ))}
              <li className={`self-center ml-4  md:hidden`}>
                <Hamburger
                  className="md:hidden"
                  menu={HEADER_MENU}
                  active={hamburgerActive}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}