import { Feedback } from "@/components/Feedback/Feedback";
import { POLICY_CONTENT } from "@/app/static/policy";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const isRussian = locale === "ru";

  return {
    title: isRussian ? "Политика конфиденциальности" : "Privacy policy",
    description: isRussian
      ? "Политика обработки и защиты персональных данных PVB."
      : "PVB personal data processing and privacy policy.",
  };
}

const Policy = ({ params: { locale } }: { params: { locale: string } }) => {
  setRequestLocale(locale);
  const content = POLICY_CONTENT[locale === "en" ? "en" : "ru"];

  return (
    <div className="min-h-[50vh] mt-[86px] bg-white">
      <div className="h-[140px] w-full relative">
        <Image
          src="/background.png"
          alt=""
          width={1000}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container md:mb-12 mb-6">
        <h1 className="page-title mt-4">
          {content.title}
        </h1>
        {content.sections.map((section) => (
          <section key={section.title}>
            <h2 className="title">{section.title}</h2>
            {section.introduction && (
              <p className="text-[18px] text-grayText indent-8">
                {section.introduction}
              </p>
            )}
            <ol className="list-decimal pl-8 text-[18px] text-grayText">
              {section.items.map((item) => (
                <li key={item} className="pl-2 mb-1">
                  {item}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      <Feedback />
    </div>
  );
};

export default Policy;
