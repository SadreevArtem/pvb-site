import React from "react";
import { createPortal } from "react-dom";
import { HeaderMenuItem } from "./static";
import { AppIcon } from "../AppIcon";
import clsx from "clsx";
import { HamburgerMenu } from "./components/HamburgerMenu";


type Props = {
  menu: HeaderMenuItem[];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
  openLabel: string;
  closeLabel: string;
};

export const Hamburger: React.FC<Props> = ({
  menu,
  active,
  onOpen,
  onClose,
  openLabel,
  closeLabel,
  className = "string"
}) => {
  const onToggle = () => (active ? onClose() : onOpen());

  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="flex"
        aria-label={active ? closeLabel : openLabel}
        aria-expanded={active}
      >
        <div className={clsx("flex flex-col gap-1 ", {hidden: active})}>
          <div
            className={clsx("bg-primary w-[25px] h-[3px]")}
          />
           <div
            className={clsx("bg-primary w-[25px] h-[3px]")}
          />
           <div
            className={clsx("bg-primary w-[25px] h-[3px]")}
          />
        </div>
        <AppIcon
          type="close"
          className={clsx("text-primary max-md:w-[22px] max-md:h-[22px]", {
            hidden: !active,
          })}
        />
      </button>
      {active &&
        createPortal(
          <HamburgerMenu
            className={"md:hidden"}
            menu={menu}
            onClose={onClose}
          />,
          document.body
        )}
    </>
  );
};
