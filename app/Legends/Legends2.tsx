"use client"
import React from 'react'
import { ROLES } from '../../constants'
import  { useRef, useState } from "react";
import SwiperHeader from './SwiperHeader';
function Legends2() {
  const [pathname, setpathname] = useState<string | undefined>("All");

  if (window !== undefined) {
    window.addEventListener("hashchange", () => {
      const pathname = window.location.hash;
      setpathname(pathname);
    });
  }

  const isActive = pathname?.split("#").pop();
  return (
    <div id="monospace" className='w-full h-[60px] frc justify-center bg-[#151515] text-slate-200 '>

      <div className='w-0 690:w-full h-[60px] frc justify-center hidden select-none 690:flex '>
         {
          ROLES.map(Role => (
            <a href={`#${Role.NAME}`} className={`text-[20px] h-full frc cursor-pointer  ${isActive === Role.NAME ? 
              "border-b-[3px] border-red-600 bg-[#000000f3]"  : "border-b-[3px] border-transparent" } transition-all duration-75  px-[15px] 
              hover:bg-[#000000f3]`} key={Role.NAME} >{Role.NAME}</a>
          ))
         }  
       </div>
       <SwiperHeader/>
    </div>

  )
}

export default Legends2