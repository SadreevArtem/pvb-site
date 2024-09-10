import { Feedback } from '@/components/Feedback/Feedback';
import Image from 'next/image';
import React from 'react'
import { NEWS } from '../page';
import clsx from 'clsx';
import Link from 'next/link';




const NewsDetail = ( {
    params: { id, locale },
  }: {
    params: { id: string, locale: string };
  }) => {
    const item = NEWS[+id]
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
          {item.name}
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
          <p className="indent-8">{item.text}</p>
          <Link className='text-link md:my-8 my-6 block' href={item.source}>Ссылка на источник</Link>
          <Link className='text-link md:my-8 my-6 block' href={`/${locale}/news`}>Смотреть все новости</Link>
        </div>
      </div>

      <Feedback />
    </div>
  );
}

export default NewsDetail;