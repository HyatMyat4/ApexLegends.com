"use client"
import React from 'react'
import { Maps } from '../../constants'
import { useState } from 'react'
import { useEffect } from 'react'
function Session2() {
    const [pathname, setpathname] = useState<string | undefined>("BrokenMoon");


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
    <div id="monospace" className='w-full h-auto 1200:h-[300px] frc justify-center text-white bg-[#161616]'>
         <div className='w-full 1200:w-[1200px] h-auto fcc  justify-center m-auto py-[40px] 1200:py-0'>
         <div className='text-[40px] font-bold  text-center'>BATTLE ROYALE</div>
         <span className='text-[19px] text-center my-[10px]'>Located on planets across the Outlands, these massive landscapes host the massive Apex Games.</span>
          <div className='w-full h-auto frc justify-center flex-wrap'>
             { Maps.map(data => (
               <a href={`#${data.link}`} className={`text-[19px] ${data.link.toLowerCase() === isActive?.toLowerCase() ? "text-red-600" : ""} cursor-pointer group hover:text-red-600 hover:scale-105 
               transition-all duration-100 mr-[25px] my-[15px] fcc`}>
                  <span>{data.Name}</span>
                  <div className={`w-full h-[2px] ${data.link.toLowerCase() === isActive?.toLowerCase() ? "bg-red-600" : "bg-white "} group-hover:bg-red-600`}></div>
               </a>
             ))
             }
          </div>
         </div>
    </div>
  )
}

export default Session2