import { useTranslations } from "next-intl";
import Link from "next/link";
import { AppIcon } from "../AppIcon";

type Props = {
  locale: string;
}

export const EducationBlock: React.FC<Props> = ({locale}) => {
    const t = useTranslations("EducationBlock")
    return (
      <section className="xxl:px-24 pb-[64px]">
        <div className="container pt-[64px]">
          <h2 className="text-title-red text-[54px] font-bold md:mt-[20px] md:mb-[30px]">
            {t("titleMain")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {new Array(3).fill("news").map((news, i) => {
              return (
                <div key={i} className="">
                  <h3 className="mt-5 mb-3 text-[24px] text-primary font-bold leading-6 border-b-2 pb-3">
                    {t(`title${i + 1}`)}
                  </h3>
                  <p className="mb-4 text-primary">{t(`duration${i + 1}`)}</p>
                  <Link
                      href={`/${locale}/education`}
                    className="text-primary text-[18px] rounded-full font-bold border-primary border-2 p-2 px-8 cursor-pointer
                             hover:bg-primary hover:text-white"
                  >
                    {t("button")}
                  </Link>
                </div>
              );
            })}
            {/* <div className="">
              <p className="lg:text-[21px] text-[18px] mb-6 text-[#333738]">{t("text")}</p>
              <Link
                href={"/about"}
                className="text-primary text-[18px] rounded-full font-bold border-primary border-2 p-2 px-8 cursor-pointer
               hover:bg-primary hover:text-white"
              >
                {t("button")}
              </Link>
            </div> */}
          </div>
          <div className="flex items-center mt-12">
            <Link className="uppercase text-primary text-[30px] font-bold"  href={`/${locale}/education`}>
              {t("educationLink")}
            </Link>
            <AppIcon type="chevron-right" className="text-title-red w-8 h-8" />
          </div>
        </div>
      </section>
    );
}