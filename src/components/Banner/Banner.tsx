'use client'
import { useTranslations } from "next-intl";
import Image from "next/image"
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

type BannerProps = {
    images: {url: string}[];
  };

export const Banner: React.FC<BannerProps> = ({ images }) => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const activeBanner = images[activeBannerIndex];
  const imageRef = useRef<HTMLImageElement>(null);
  const t = useTranslations("HomePageBanner");

  const onNextBannerIndex = useCallback(() => {
    setActiveBannerIndex((prevState: number) =>
      prevState === images.length - 1 ? 0 : prevState + 1
    );
  }, [setActiveBannerIndex, images]);

  useEffect(() => {
    const intervalId = setInterval(onNextBannerIndex, 5000);
    return () => clearInterval(intervalId);
  }, [onNextBannerIndex]);
  return (
    <div className="relative w-full lg:mt-[100px] md:mt-[90px] mt-[80px]">
      <div className="flex justify-center items-start ">
        <div className="h-[60vh] ">
          <SwitchTransition mode="in-out">
            <CSSTransition
              nodeRef={imageRef}
              key={activeBannerIndex}
              timeout={1000}
              className="transition-opacity duration-1000 object-cover"
              classNames={{
                enter: "opacity-0",
                enterActive: "opacity-100",
                exit: "opacity-100",
                exitActive: "opacity-0",
              }}
            >
              <Image
                ref={imageRef}
                src={activeBanner?.url ?? ""}
                alt=""
                fill
                className="w-full"
                priority={true}
                quality={100}
              />
            </CSSTransition>
          </SwitchTransition>
          <div className="absolute top-0 left-0 w-[70%] h-full lg:p-24 py-24 pl-4 flex flex-col items-start gap-16">
            <h1 className="text-white lg:text-[90px] md:text-[45px] text-[36px] font-bold">
              {t("title")}
            </h1>
            <p className="text-white lg:text-[40px] md:text-[21px] uppercase">
              {t("description")}
            </p>
            <Link
              href={"/about"}
              className="text-white text-[18px] rounded-full font-bold border-white border p-2 px-8 cursor-pointer
               hover:bg-white hover:text-primary"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}