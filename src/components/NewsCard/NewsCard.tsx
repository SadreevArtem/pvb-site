import React from "react";
import Image from "next/image";
import { clsx } from "clsx";

type News = {
    id: string;
    name: string;
  title: string;
  description: string;
  imageUrl?: string;
  date: string
}

type Props = {
  item: News;
  locale: string;
  imageSizes?: string;
  className?: string;
};

export const NewsCard: React.FC<Props> = ({ item, locale,  imageSizes = "100vw", className = "" }) => {
  return (
    <div
      className={clsx(
        "bordered-card bg-white overflow-hidden flex flex-col",
        className
      )}
    >
      {item.imageUrl ? (
        <Image
          src={item.imageUrl}
          alt={item.name ?? ""}
          width={598}
          height={414}
          sizes={imageSizes}
          className="w-full"
        />
      ) : (
        <div className="w-full bg-gray-10 aspect-[13/9] pt-[69.23%] supports-[aspect-ratio]:pt-0" />
      )}
      <div className="px-4 py-6 text-black flex-grow flex flex-col">
        <div className="text-sm text-gray-70 mb-2">{item.date}</div>
        <a
          href={`/${locale}/news/${item.id}`}
          className="card-title font-sans-inter hover:text-primary active:text-primary-70 mb-3 line-clamp-4"
        >
          {item.name}
        </a>
        <div className="text-sm line-clamp-5 mb-6">{item.description}</div>
        <div className="flex justify-between items-center mt-auto">
          <div />

          <a
            href={`/${locale}/news/${item.id}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-85 active:text-primary-70"
          >
            <span>{"Читать"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
