'use client'
import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { HeaderMenuItem } from "../../static";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  menu: HeaderMenuItem[];
  onClose: () => void;
  className?: string;
};

export const HamburgerMenu: React.FC<Props> = ({ menu, onClose, className = "" }) => {
  const pathname = usePathname()
  const localActive = useLocale();
  const paths = pathname.split("/");  
  const listItemClassName = "last:mb-0 last:border-b-[1px] py-2 px-4 border-t-[1px] border-gray";
  const t = useTranslations('Header');
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
              <Link href={`/${localActive}`} className='block w-full text-primary' onClick={onClose}>
                {t('main')}
              </Link>
            </li>
            {menu.map((item) => (
              <li
                key={item.value}
                className={clsx(listItemClassName, {
                  "bg-bgOpacity": pathname.includes(`${item.href}`)
                })}
              >
                <Link href={`/${localActive}${item.href}`} className={clsx("block w-full text-primary")} onClick={onClose}>
                  {t(item.value)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
