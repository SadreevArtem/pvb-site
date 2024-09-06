import { Feedback } from '@/components/Feedback/Feedback';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import React from 'react'

 const Consultation = (
  {
    params: { locale },
  }: {
    params: { locale: string };
  }) =>{
    unstable_setRequestLocale(locale);

    const t = useTranslations("ConsultationPage")
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
        <h1 className="md:text-[72px] md:ml-[260px] text-[36px] text-primary font-bold">
          {t("title")}
        </h1>
      </div>
      <div className="container mb-8 text-[18px] text-grayText">
        <div className='md:ml-[160px]'>
          <p className='title'>Наша команда всегда готова помочь и произвести консультационные услуги по следующим направлениям:</p>
          <ul>
            <li>70.22 - Консультирование по вопросам коммерческой деятельности и управления</li>
            <li>63.99.1 - Деятельность по оказанию консультационных и информационных услуг</li>
            <li>66.19 - Деятельность вспомогательная прочая в сфере финансовых услуг, кроме страхования и пенсионного обеспечения</li>
            <li>66.19.4 - Деятельность по предоставлению консультационных услуг по вопросам финансового посредничества</li>
            <li>82.11 - Деятельность административно-хозяйственная комплексная по обеспечению работы организации</li>
            <li>82.99 - Деятельность по предоставлению прочих вспомогательных услуг для бизнеса, не включенная в другие группировки</li>
          </ul>
        </div>
      </div>

      <Feedback />
    </div>
  );
}


export default Consultation;