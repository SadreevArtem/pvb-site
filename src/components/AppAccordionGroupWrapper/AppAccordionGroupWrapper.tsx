"use client";

import React from "react";
import { AppAccordionGroup } from "../AppAccordionGroup/AppAccordionGroup";
import { useTranslations } from "next-intl";

type AccordionItem = {
  id?: number;
  name?: string;
  value: string[];
};

type Props = {
  items: AccordionItem[];
};

export function AppAccordionGroupWrapper({ items }: Props) {
  const t = useTranslations("ValveTermsPage");
  const accordionContentSlot = (item: AccordionItem) => (
    <ul>
      {item.value.map((value) => (
        <li className="indent-8" key={value}>
          {t(value)}
        </li>
      ))}
    </ul>
  );

  return (
    <AppAccordionGroup<AccordionItem>
      items={items}
      accordionContentSlot={accordionContentSlot}
    />
  );
}
