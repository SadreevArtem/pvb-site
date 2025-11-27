"use client";

import React from "react";
import { AppAccordionGroup } from "../AppAccordionGroup/AppAccordionGroup";
import { useTranslations } from "next-intl";
import Image from "next/image";

type AccordionItem = {
  id?: number;
  name?: string;
  value: string[];
  img?: string;
};

type Props = {
  items: AccordionItem[];
  currentTranslate: string;
};

export function AppAccordionGroupWrapper({ items, currentTranslate }: Props) {
  const t = useTranslations(currentTranslate);
  const accordionContentSlot = (item: AccordionItem) => (
    <ul className="flex flex-col">
      {item.value.map((value) => (
        <li className="indent-8" key={value}>
          {t(value)}
        </li>
      ))}
      {item.img && (
        <li className="self-center w-64 max-w-full aspect-square relative mt-4">
          <Image
            alt=""
            src={item.img}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 256px"
          />
        </li>
      )}
    </ul>
  );

  return (
    <AppAccordionGroup<AccordionItem>
      items={items}
      currentTranslate={currentTranslate}
      accordionContentSlot={accordionContentSlot}
    />
  );
}
