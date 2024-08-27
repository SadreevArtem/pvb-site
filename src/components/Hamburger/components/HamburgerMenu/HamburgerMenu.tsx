'use client'
import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { useRouter } from "next/router";
import { HeaderMenuItem } from "../../static";
import { usePathname } from "next/navigation";

type Props = {
  menu: HeaderMenuItem[];
  onClose: () => void;
  className?: string;
};

export const HamburgerMenu: React.FC<Props> = ({ menu, onClose, className = "" }) => {
  const pathname = usePathname()
  const paths = pathname.split("/");  
  const listItemClassName = "last:mb-0 last:border-b-[1px] py-2 px-4 border-t-[1px] border-gray";

  return (
    <div className={clsx("fixed z-40 top-[80px] right-0 left-0 bottom-0 bg-cover opacity-90", className)}>
      <div className='container max-h-full pb-3 overflow-y-auto'>

        <nav>
          <ul className="flex flex-col gap-0 list-none">
            <li
              className={clsx(listItemClassName, {
                "bg-bgOpacity": paths[1] === ""
              })}
            >
              <Link href='/' className='block w-full  text-primary' onClick={onClose}>
                Главная
              </Link>
            </li>
            {menu.map((item) => (
              <li
                key={item.value}
                className={clsx(listItemClassName, {
                  "bg-bgOpacity": pathname.includes(`${item.href}`)
                })}
              >
                <Link href={item.href} className={clsx("block w-full text-primary")} onClick={onClose}>
                  {item.value}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
