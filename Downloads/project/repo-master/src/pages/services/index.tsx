import React from 'react';
import Image from 'next/image'
import icon from './icon.gif'
import BankCard from '@/Components/BankCard';
import ChurchServicesTable from '@/Components/Schedule';
function index() {
  return (
    <>
      <div>

         <Image src={icon} alt='M' className='m-auto w-[130px] lg:w-[180px]  mt-6 ' loading="lazy"/>
        <p className='text-center text-lg  text-[14px]   text-shadow-sm my-10 '>انضموا إلينا في صلاة القداس الالهي   </p>
        <div dir='rtl' className=" ">
          <section className="container mx-auto my-10 px-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="    text-[14px]    font-semibold  ">قداسات يوم الاحد</h3>
                <p className="mt-2 text-[13px]   ">-  الاول :  6:00 الي 8:00 صباحا </p>
                <p className="mt-2  text-[13px] ">-  الثاني : 7:30 الي 10:30 صباحا </p>
              </div>
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="  text-[14px]    font-semibold  ">قداس يوم الاثنين</h3>
                <p className="mt-2  text-[13px]" >الساعة 5:30 الي 7:30 صباحا </p>
              </div>
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className=" text-[14px]    font-semibold  ">قداسات باقي ايام الاسبوع</h3>
                <p className="mt-2  text-[13px]">يقام القداس من الساعة 7:30 الي 10:00 صباحا</p>

              </div>

            </div>







          </section>



        </div>
        <p className='text-center text-[14px]  text-shadow-sm  my-5  mt-26'>  صلوات العشيات تقام في المواعيد التالية</p>

        <div dir='rtl' className=" my-20">


          <section className="container mx-auto my-10 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* قداس الاحد */}
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className=" text-[14px]    font-semibold ">عشية يوم السبت</h3>
                <p className=" tmt-2  text-[13px] ">الساعة 6:00 السادسة مساءا</p>
              </div>
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className=" text-[14px]    font-semibold  ">عشية يوم الخميس</h3>
                <p className="mt-2  text-[13px] ">الساعة 6:00 السادسة مساءا</p>
              </div>



              {/* مغارة للأطفال */}

            </div>


          </section>

          {/* Footer Section */}
<div className="container mx-auto lg:px-10 py-6 text-right  lg:mt-5   lg:flex lg:flex-row gap-x-10  justify-end items-center">
<ChurchServicesTable/>
 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe9JHkmujCUaDl6mzc_o-n2cy0kKgqd_Irk9KKw8LGE5x2NOQ/viewform?embedded=true" height="1200" width="100%" style={{margin: '20px auto'}}    >Loading…</iframe>

  
</div>
        </div>
      </div>
      <iframe allowFullScreen     src="https://heyzine.com/flip-book/93a14503a1.html#page/11" className='w-[100%] h-[100vh] flex justify-content m-auto' ></iframe>

    </>)
}

export default index