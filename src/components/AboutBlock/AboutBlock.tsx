import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  locale: string;
}

export const AboutBlock: React.FC<Props> = ({locale}) => {
    const t = useTranslations("AboutBlock")
    return (
      <section className=" xxl:px-24 lg:mt-[60px] pb-8">
        <div className="container ">
          <h2 className="home-section-title text-title-red mt-5 mb-7">
            {t("title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="">
              <p className="lg:text-[21px] text-[18px] mb-6 lg:mb-8 text-[#333738]">{t("text")}</p>
              <Link
                href={`/${locale}/about`}
                className="text-primary text-[18px] rounded-full font-bold border-primary border-2 p-2 px-8 cursor-pointer
               hover:bg-primary hover:text-white"
              >
                {t("button")}
              </Link>
            </div>
            <div className="max-md:hidden ">
              <Image
                src="/armatura.jpeg"
                alt={t("imageAlt")}
                className="object-cover max-h-[400px]"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    );
}
