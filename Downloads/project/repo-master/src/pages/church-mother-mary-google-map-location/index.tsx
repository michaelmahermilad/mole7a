import React from 'react'
 
import Image from 'next/image'
import icon from './icon.gif'
 
function index() {
 
 
   

  return  (<>
        <p className='text-center text-[20px] lg:text-[21px] font-bold  my-7'>الموقع الجغرافي للكنيسة</p>

        <Image src={icon} alt='M' className='m-auto w-[130px] lg:w-[180px]   ' loading="lazy"/>

       <p className='text-center text-[18px] lg:text-[18px] my-9'>:يمكنك زيارة الكنيسة في العنوان التالي</p>
      <p className='text-center text-[16px] lg:text-[18px] my-8'>مصر - القاهرة - حدائق القبة  -المليحة  -شارع الكنيسة</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.2292390385837!2d31.280128100000002!3d30.0876204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583feb8bfc7ce3%3A0xfabeae994fb512!2z2YPZhtmK2LPYqSDYp9mE2LPZitiv2Kkg2KfZhNi52LDYsdin2KEg2YXYsdmK2YUg2KjYp9mE2YXZj9mE2ZHZitit2Kk!5e0!3m2!1sar!2seg!4v1757675651980!5m2!1sar!2seg" width="100%" height="700px" style={{border:"0px" ,borderTop:"6px white solid"}}    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
 
 
 </>
  )
}

export default React.memo(index)