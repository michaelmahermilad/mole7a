import Image from 'next/image'
import React from 'react'
import bankm from './bank misr.jpg'
function BankCard() {
  return (

    <div dir='rtl' className='flex flex-wrap flex-row  justify-center items-center my-30 '>
    <div className=' w-[90%] lg:w-[30%] m-auto   rounded-sm   bg-[white] shadow-xl   overflow-hidden    '>
        <p className='text-center  text-xl   text-white bg-[brown] px-3 py-3'> شارك معنا بالخدمة </p>

<div className="grid grid-cols-[2fr_3fr]     ">
<div className="border-l-1 px-3 py-3   border-gray-200">
    

    <Image src={bankm} width={200} alt='Bank Misr' className='w-full' loading="lazy"/>
</div>

<div className=" grid grid-rows-3 px-3 py-3 gap-1">
            
<p className='text-right font-bold      '> <strong className='text-[brown]'>اسم البنك :</strong> بنك مصر</p>
<p className='text-right  font-bold     '> <strong className='text-[brown]'>سويفت كود : </strong>  ***********</p>
<p className='text-right  font-bold     '> <strong className='text-[brown]'>رقم الحساب : </strong>  **************</p>



</div>



</div>
<p className='text-right  text-sm    bg-gray-100 px-3 py-3'> للتحويل من خارج مصر :   *********************</p>
<p className='text-right text-sm      bg-gray-100 px-3 '> تليفون :  *******</p>
<p className='text-right text-sm      bg-gray-100 px-3 py-2'> تليفون ارضي :   **********</p>

    </div>
 
    </div>

  )
}

export default BankCard