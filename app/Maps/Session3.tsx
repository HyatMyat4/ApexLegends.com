"use client"
import React from 'react'
import { Maps_data } from '../../constants'
import { useState } from 'react'
function Session3() {
    const [pathname, setpathname] = useState<string | undefined>("BrokenMoon");

    if (window !== undefined) {
      window.addEventListener("hashchange", () => {
        const pathname = window.location.hash;
        setpathname(pathname);
      });
    }
  
    const isActive = pathname?.split("#").pop();
    console.log(isActive,'🥑🥑🥑')
  return (
    <>
     {Maps_data.map(data => (
            <div id="monospace" className={`w-full h-auto ${data.NAME2.toLowerCase() === isActive?.toLowerCase() ? "" : "hidden" } `}>
            <div className='w-full h-auto hidden 690:inline'>
                <img
                 src={data.Map_IMG}
                />
            </div>
            <div className='w-full h-auto inline 690:hidden'>
                <img
                 src={data.Map_IMG2}
                />
            </div>
            <div className='w-full h-auto text-black relative pb-[100px] '>
                <div className='w-full 1000:w-[1000px] h-auto m-auto fcc items-start relative z-50 px-[20px] 1000:px-0'>
                    <div className='w-full h-[120px] frc text-[35px] font-bold mt-[50px]'>
                       {data.NAME}
                    </div>
                    <p className='w-full h-auto text-[19px]'>
                       {data.Map_text}                   
                    </p>
                </div>
                <div className='w-full h-[100%]  bg-cover bg-center z-0  absolute top-0 ' 
                style={{ backgroundImage:`url(https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-section-bg-beige-texture-xl.jpg.adapt.1920w.jpg)`}} >
            </div>
            </div>
        </div>
     ))}
    </>
  )
}

export default Session3