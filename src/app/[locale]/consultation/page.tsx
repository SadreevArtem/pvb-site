import { useTranslations } from 'next-intl';
import React from 'react'

 const Consultation = () => {
    const t = useTranslations("ConsultationPage")
  return (
    <div className='min-h-[50vh] mt-[140px]'>
        <div className='container'>
            <h1 className='text-[72px] text-primary font-bold'>{t("title")}</h1>
        </div>
    </div>
  )
}


export default Consultation;