"use client";
import { Feedback } from "@/components/Feedback/Feedback";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { NEWS } from "@/components/NewsBlock/static";

import "swiper/css";
import "swiper/css/pagination";

const NewsDetail = ({
  params: { id, locale },
}: {
  params: { id: string; locale: string };
}) => {
  const item = NEWS[+id];
  return (
    <div className="min-h-[50vh] md:mt-[100px] mt-[86px] bg-white">
      <div className="h-[140px] w-full relative">
        <Image
          src={"/background.png"}
          alt={""}
          width={1000}
          height={100}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mt-6">
        <h1 className="md:text-[56px] text-center text-[36px] text-primary font-bold">
          {locale === "ru" ? item.name : item.nameEN}
        </h1>
      </div>
      <div className="container my-8 text-[18px] text-grayText min-h-[380px]">
        <div>
          <div
            className={clsx(
              "relative lg:w-[350px] lg:h-[380px] float-right lg:ml-8"
            )}
          >
            <Image
              src={item.imageUrl}
              alt=""
              width={1280}
              height={960}
              className="object-cover h-full"
            />
          </div>
          <p className="indent-8">
            {locale === "ru" ? item.text : item.textEN}
          </p>
          {Boolean(item.source) && (
            <Link className="text-link md:my-8 my-6 block" href={item.source}>
              {locale === "ru" ? "Ссылка на источник" : "Source link"}
            </Link>
          )}
          <Link
            className="text-link md:my-8 my-6 block"
            href={`/${locale}/news`}
          >
            {locale === "ru" ? "Смотреть все новости" : "See all news"}
          </Link>
        </div>
      </div>
      {item.imageGallery && (
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="md:h-[70vh] w-full rounded-lg mb-8"
        >
          {item.imageGallery.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex items-center md:w-[60%] w-[86%] h-full justify-center mx-auto">
                  <Image
                    src={image}
                    alt=""
                    width={1280}
                    height={960}
                    className="object-cover h-full w-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <Feedback />
    </div>
  );
};

export default NewsDetail;
