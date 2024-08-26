'use client'
import Link from "next/link";
import { Hamburger } from "../Hamburger";
import { useState } from "react";
import { HEADER_MENU } from "../Hamburger/static";
import Image from "next/image";




export default function Header ()  {
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
      <header
        className={` md:p-4 p-3 header-scroll fixed top-0 z-10 bg-primary w-full`}
      >
        <div className={"container flex items-center justify-between min-h-6"}>
          <Link href="/" className="relative block shrink-0">
            <Image src="/logo-pvb.svg" alt="logo" width={200} height={200} />

            {/* <div className="flex flex-col items-center">
              
            </div> */}
          </Link>
          <nav className="flex items-center gap-4">
            <ul className="flex md:gap-4 gap-2 items-center">
              <li>
                <Link className="header-link relative" href="/favorite"></Link>
              </li>
              <li>
                <Link className="header-link relative" href="/cart"></Link>
              </li>
              <li className={`self-center ml-6  max-md:hidden`}></li>
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