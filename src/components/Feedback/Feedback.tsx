'use client';
import React, { FormEvent, useState } from "react";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { AppTextField } from "../AppTextField/AppTextField";

type Props = {
  className?: string;
};

export const Feedback: React.FC<Props> = ({ className = "" }) => {
  const t = useTranslations("Feedback");
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
      consent: { checked: boolean };
      website: { value: string };
    };

    const variables = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
      consent: target.consent.checked,
      website: target.website.value,
    };

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(variables),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primary">
      <div className={clsx("container px-4 py-8 lg:py-20", className)}>
        {!isSuccess ? (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-[40px]">
            <div className="flex flex-col my-auto text-white text-center">
              <div className="font-extrabold text-3xl mb-4">{t("question")}</div>
              <div>{t("description")}</div>
            </div>
            <form className="bg-white p-6" onSubmit={onSubmit}>
              <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="feedback-website">Website</label>
                <input
                  id="feedback-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <AppTextField
                tag="input"
                label={t("name")}
                placeholder={t("typeName") ?? ""}
                required
                minLength={2}
                maxLength={100}
                name="name"
                className="mb-6"
              />
              <AppTextField
                tag="input"
                type="email"
                label={t("email")}
                placeholder={t("typeEmail") ?? ""}
                required
                maxLength={254}
                name="email"
                className="mb-6"
              />
              <AppTextField
                tag="textarea"
                label={t("message")}
                placeholder={t("typeMessage") ?? ""}
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                name="message"
                className="mb-2"
              />
              <div className="text-xs mb-4">* - {t("required")}</div>
              <label className="group mb-6 flex cursor-pointer items-start gap-3 text-sm leading-5 text-grayText">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={hasConsent}
                  onChange={(event) => setHasConsent(event.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-primary bg-white transition-colors group-hover:bg-cover peer-checked:bg-primary peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary after:h-2 after:w-3 after:-translate-y-0.5 after:rotate-[-45deg] after:border-b-2 after:border-l-2 after:border-white after:opacity-0 after:content-[''] peer-checked:after:opacity-100"
                />
                <span>
                  {t("consentPrefix")}{" "}
                  <Link
                    href={`/${locale}/policy`}
                    className="text-link underline underline-offset-2 hover:text-primary"
                  >
                    {t("consentLink")}
                  </Link>
                  .
                </span>
              </label>
              {isError && <div className="text-sm text-red-700 mb-4">{t("error")}</div>}
              <button
                type="submit"
                disabled={isLoading || !hasConsent}
                className="text-white bg-primary uppercase text-[18px] rounded-full font-bold border-primary border-2 p-2 px-8 transition-colors enabled:cursor-pointer enabled:hover:bg-white enabled:hover:text-primary disabled:cursor-not-allowed disabled:opacity-45"
              >
                {isLoading ? t("sending") : t("button")}
              </button>
            </form>
          </div>
        ) : (
          <div className="font-sans-inter font-extrabold text-3xl text-center text-white">
            {t("success")}
          </div>
        )}
      </div>
    </div>
  );
};
