"use client"
import React from 'react'
import { ROLES } from '../../constants'
import  { useRef, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useEffect } from 'react';
function SwiperHeader() {
    const [pathname, setpathname] = useState<string | undefined>("All");


    useEffect(() => {
    
      if (window) {
        window.addEventListener("hashchange", () => {
          const pathname = window.location.hash;
          setpathname(pathname);
        });
      }
    }, [])
  
  
    const isActive = pathname?.split("#").pop();
  return (
    <div className='w-full h-[60px]  select-none frc justify-center group  cursor-pointer  overflow-hidden flex 690:hidden    '>  
            <span className='text-[20px]'>{isActive}</span>   <BsChevronDown className="ml-[6px]  text-[18px]   transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
        <div className=" hidden  group-hover:inline w-[100%] text-white  h-[550px] absolute bottom-[-245px] left-0 z-[100] ">
          <div
            className="bg-black w-[100%] h-[95%] mt-[24px] rounded   overflow-hidden
                  opacity-[0.9]   group-hover:animate-dropdownHight   p-[15px] fcc  justify-center  "
          >
            {ROLES.map((Role) => (
                <div className='w-full h-full frc justify-center  '>
                <a href={`#${Role.NAME}`} className={` text-[20px] text-white h-full frc cursor-pointer   ${isActive === Role.NAME ? 
                  "border-b-[3px] border-red-600 bg-[#000000f3] "  : "border-b-[3px] border-transparent" } transition-all duration-75  px-[15px] 
                  hover:bg-[#000000f3]  `} key={Role.NAME} >{Role.NAME}
                  </a>
                </div>   
            ))}
          </div>
        </div>       
       
   </div>
  )
}

export default SwiperHeader