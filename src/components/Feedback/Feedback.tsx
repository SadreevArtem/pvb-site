'use client'
import React, { FormEvent } from "react";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { AppTextField } from "../AppTextField/AppTextField";



type Props = {
  className?: string;
};

export const Feedback: React.FC<Props> = ({ className = "" }) => {
  const  t  = useTranslations("Feedback");
  const isSuccess = false;
  const isError = false;
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (isLoading) {
    //   return;
    // }
 
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const variables = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value
    };
    // await onSendEmail(variables);
  };

  return (
    <div className="bg-primary">
      <div className={clsx("  container px-4 py-8 lg:py-20", className)}>
        {!isSuccess ? (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-[40px]">
            <div className="flex flex-col my-auto text-white text-center">
              <div className="font-extrabold text-3xl mb-4">
                {t("question")}
              </div>
              <div className="">{t("description")}</div>
            </div>
            <form className="bg-white p-6" onSubmit={onSubmit}>
              <AppTextField
                tag="input"
                label={t("name")}
                placeholder={t("typeName") ?? ""}
                //   disabled={isLoading}
                required
                name="name"
                className="mb-6"
              />
              <AppTextField
                tag="input"
                type="email"
                label={t("email")}
                placeholder={t("typeEmail") ?? ""}
                //   disabled={isLoading}
                required
                name="email"
                className="mb-6"
              />
              <AppTextField
                tag="textarea"
                label={t("message")}
                placeholder={t("typeMessage") ?? ""}
                required
                //   disabled={isLoading}
                rows={5}
                name="message"
                className="mb-2"
              />
              <div className="text-xs mb-6">* - {t("required")}</div>
              {isError && (
                <div className="text-sm text-danger mb-4">
                  {t("Произошла ошибка на сервере")}
                </div>
              )}
              <button type="submit"   className="text-white bg-primary uppercase text-[18px] rounded-full font-bold border-primary border-2 p-2 px-8 cursor-pointer
                             hover:bg-white hover:text-primary">
                {t("button")}
              </button>
            </form>
          </div>
        ) : (
          <div className="font-sans-inter font-extrabold text-3xl text-center">
            {t("Ваш вопрос успешно отправлен!")}
          </div>
        )}
      </div>
    </div>
  );
};
