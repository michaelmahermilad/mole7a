import React, { useState } from 'react'
import Search from './Search'
import Login from './Login'
import Themebutton from './Themebutton'
import Image from 'next/image'
import banner from './banner.svg'
import y from '../../public/Pope-Tawadros.webp'
import logo from '../../public/logo.webp'

function Navbar() {

    const [loaded, setLoaded] = useState(false);

  return (
<div style={{overflow:'hidden' }} className="px-[10px] lg:px-[10px]  lg:px-[25px]  w-full flex justify-between items-center py-1 pointer-events-none " >
    
         <Image src={y} alt='M' width={100} className='w-[90px]  lg:w-[170px] mb-[-26px]'        
 />

      
      
     

<Image 

 

src={banner}  width={200}alt='M' className='w-[160px] lg:w-[290px] pr-[5px] my-[10px]   overflow-hidden  '  />
<Image src={logo} width={100} alt='M' className=' w-[90px] lg:w-[180px] mb-[5px]    '  onLoad={() => setLoaded(true)} />

    {/*
    <Search/><Themebutton/>
      <Login/>
    
    */} 
      
    </div>
  )
}

export default Navbar
