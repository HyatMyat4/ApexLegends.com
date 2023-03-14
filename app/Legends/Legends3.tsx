"use client"
import React from 'react'
import { LEGENDS } from '../../constants'
import { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
function Legends3() {
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
    <div className='w-full h-auto relative bg-[#FDF5EC] 1355:bg-transparent '>     
             <div className='w-full h-[100%] absolute top-0 left-0 bg-cover bg-center z-0 hidden 1355:flex' 
            style={{ backgroundImage:`url(/apex-section-bg-beige-texture-xl.jpg.adapt.1920w.jpg)`}} >
         </div>    
         <div className='w-full h-auto  frc  justify-around z-50  flex-wrap  bg-transparent '>
      
             {LEGENDS.map(legend => (
                <Link href={`/Legends/${legend.NAME}`} key={legend.NAME} className={`w-full 905:w-[450px] h-auto 905:h-[600px] ${legend.ROLE === isActive || isActive === "All"  ? "" : "hidden"} z-50 fcc overflow-hidden`}>
                    <img
                      src={legend.IMG}
                    />
                    <div id="monospace" className={`text-[28px] ${legend.NAME === "Revenant" ? " translate-y-[-35px]" : ""} text-black`}>{legend.NAME}</div>
                </Link>
             ))}
            
         </div>  
     
    </div>
  )
}

export default Legends3