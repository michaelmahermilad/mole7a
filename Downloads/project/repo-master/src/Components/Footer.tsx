 import Image from 'next/image'
import React from 'react'
import image from '../../public/image.jpg'
import BankCard from './BankCard'
function Footer() {
  return (<>

  

    <footer className=" bottom-0 left-0 w-full text-[#eeebca] bg-[#7e1215] p-4  ">



	<div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
		<ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			<li><a  href='/services'>خدمات كنسية</a></li>
			<li><a  href='/church-fathers'>اباء الكنيسة</a></li>
			<li><a  href='/about'>تاريخ الكنيسة</a></li>
			<li><a href='/church-mother-mary-google-map-location'>الموقع الجغرافي</a></li>
		 
 		</ul>

		<div className="flex flex-col justify-center pt-6 lg:pt-0">
			<div className="flex justify-center space-x-4">


<a
  href="https://www.youtube.com/@%D9%83%D9%86%D9%8A%D8%B3%D8%A9%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%D8%A9%D8%A7%D9%84%D8%B9%D8%B2%D8%B1%D9%8A%D8%A7%D9%85%D8%B1%D9%8A%D9%85%D8%A8%D8%A7%D9%84%D9%85%D9%84%D9%8A%D8%AD%D8%A9/featured"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
  title="YouTube"
  className="flex items-center justify-center w-10 h-10 rounded-full sm:w-12 sm:h-12 dark:bg-red-600 dark:text-gray-50 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M23.8 6.4c-.3-1.2-1.2-2-2.4-2.4C19.6 3.2 12 3.2 12 3.2s-7.6 0-9.4.8c-1.2.4-2.1 1.2-2.4 2.4C0 7.6 0 12 0 12s0 4.4.8 5.6c.3 1.2 1.2 2 2.4 2.4 1.8.8 9.4.8 9.4.8s7.6 0 9.4-.8c1.2-.4 2.1-1.2 2.4-2.4.8-1.2.8-5.6.8-5.6s0-4.4-.8-5.6zM9.5 15V9l6 3-6 3z"></path>
  </svg>
</a>

<a
  href="https://www.facebook.com/share/1EqVFcEexw/?mibextid=wwXIfr" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Facebook"
  title="Facebook"
  className="flex items-center justify-center w-10 h-10 rounded-full sm:w-12 sm:h-12 dark:bg-blue-600 dark:text-gray-50 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-5 h-5"
  >
    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"/>
  </svg>
</a>

<a
  href="https://wa.me/201556948100" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  title="WhatsApp"
  className="flex items-center justify-center w-10 h-10 rounded-full sm:w-12 sm:h-12 dark:bg-green-600 dark:text-gray-50 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-6 h-6"
  >
    <path d="M16.001 2.984c-7.422 0-13.453 6.031-13.453 13.453 0 2.375 0.625 4.672 1.797 6.719l-1.875 6.891 7.063-1.844c1.891 1.047 4 1.594 6.156 1.594 7.422 0 13.453-6.031 13.453-13.453s-6.031-13.453-13.453-13.453zM16.001 26.828c-1.875 0-3.719-0.516-5.313-1.5l-0.375-0.219-4.219 1.094 1.125-4.094-0.25-0.406c-1.125-1.781-1.719-3.844-1.719-5.906 0-6.125 4.984-11.109 11.109-11.109s11.109 4.984 11.109 11.109-4.984 11.031-11.109 11.031zM21.407 18.781c-0.344-0.172-2.031-1.016-2.344-1.125-0.313-0.109-0.531-0.172-0.75 0.172s-0.875 1.125-1.078 1.359c-0.188 0.219-0.344 0.25-0.688 0.078-1.875-0.938-3.094-1.672-4.344-3.781-0.328-0.563 0.328-0.531 0.938-1.75 0.109-0.234 0.047-0.438-0.031-0.609-0.078-0.172-0.75-1.828-1.031-2.5-0.266-0.625-0.531-0.547-0.75-0.547s-0.406-0.031-0.625-0.031-0.563 0.078-0.859 0.391c-0.297 0.313-1.125 1.094-1.125 2.672 0 1.578 1.156 3.094 1.313 3.313s2.266 3.453 5.5 4.844c0.766 0.328 1.359 0.516 1.828 0.656 0.766 0.234 1.469 0.203 2.016 0.125 0.609-0.094 1.875-0.766 2.141-1.5 0.266-0.75 0.266-1.391 0.188-1.5s-0.313-0.234-0.656-0.391z"/>
  </svg>
</a>
 <a
  href="https://t.me/stMary2025" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Telegram"
  title="Telegram"
  className="flex items-center justify-center w-10 h-10 rounded-full sm:w-12 sm:h-12 dark:bg-sky-600 dark:text-gray-50 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-6 h-6"
  >
    <path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM23.828 10.406l-2.781 13.109c-0.203 0.922-0.75 1.141-1.516 0.703l-4.188-3.094-2.016 1.938c-0.219 0.219-0.406 0.406-0.828 0.406l0.297-4.234 7.703-6.953c0.328-0.297-0.078-0.469-0.516-0.172l-9.516 5.984-4.109-1.281c-0.891-0.281-0.906-0.891 0.188-1.313l16.078-6.203c0.75-0.281 1.406 0.172 1.156 1.203z"/>
  </svg>
</a>

			</div>
		</div>
	</div>
  
</footer> 
 
 </>
  )
}

export default Footer