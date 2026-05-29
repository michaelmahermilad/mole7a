import React from 'react'
 import { useThemeStore } from '@/store/useStore'; // or import your MobX store

function Themebutton() {
    const { theme, toggleTheme } = useThemeStore(); // or use MobX: const { theme, toggleTheme } = themeStore;

  return (
    <div dir='ltr' onClick={toggleTheme} className="cursor-pointer">
        <div className=" bg-blue-100 w-[40px] h-[22px] flex items-center   rounded-full px-[3px]">
         <div
          className={
            ' w-[17px] h-[17px] rounded-full transition-transform duration-300 ' +
            (theme === 'dark' ? 'translate-x-[18px] bg-white' : 'translate-x-0 bg-green-300')
          }
        />
     </div>
    </div>
  )
}

export default Themebutton
