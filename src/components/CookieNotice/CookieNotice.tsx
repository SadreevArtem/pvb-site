"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const COOKIE_CONSENT_KEY = "pvb-cookie-consent";

export const CookieNotice = () => {
  const t = useTranslations("CookieNotice");
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem(COOKIE_CONSENT_KEY) !== "accepted");
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label={t("ariaLabel")}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[920px] rounded-2xl border border-white/20 bg-primary px-5 py-4 text-white shadow-2xl md:flex md:items-center md:gap-8 md:px-7 md:py-5"
    >
      <p className="text-sm leading-5 md:flex-1 md:text-base md:leading-6">
        {t("text")}{" "}
        <Link
          href={`/${locale}/policy`}
          className="font-bold underline underline-offset-2 hover:opacity-80"
        >
          {t("policyLink")}
        </Link>
      </p>
      <button
        type="button"
        onClick={acceptCookies}
        className="mt-4 w-full shrink-0 rounded-full border-2 border-white bg-white px-7 py-2.5 text-sm font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:mt-0 md:w-auto"
      >
        {t("button")}
      </button>
    </aside>
  );
};
