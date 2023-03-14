import React from 'react'
import { LATESTNEWS } from '../../constants'
function Session4() {
  return (
    <div className='w-full h-[2200px] 745:h-[1500px] 1123:h-[800px] relative overflow-hidden '>
        <div className='w-full h-full fcc  mt-[50px] absolute '>
          <div className=' w-[98%] 1400:w-[1300px] h-full m-auto'>
            <div id="monospace" className='w-full h-[13%] text-black text-[33px] font-bold  frc justify-center '>
               LATEST NEWS
            </div>
            <div  className='w-full h-[81%]    frc items-start justify-center flex-wrap '>
                {LATESTNEWS.map(data => (
                             <a key={data.IMAGE} href={data.href} id="monospace" 
                             className={`w-[355px] ${ data.COMMING_Date !== "FEB 13,2023" ? " ml-0 720:ml-[15px]" : ""} mt-[25px] 745:mt-0 h-[550px] 1225:h-[85%] cursor-pointer hover:scale-105 transition-all duration-75 bg-[#161616] 
                             relative fcc `}>
                             <img
                              src={data.IMAGE}
                              className='w-full h-auto'
                             />
                             <div className='w-full px-[15px] fcc'>
                             <div className='w-full text-[18px] h-[50px] frc justify-start '>
                                 <span className='text-red-500 tracking-[-.1em]'>APEXLEGENDS</span>
                                 <span className='text-white tracking-[-.0.99em] ml-[20px]'>{data.COMMING_Date}</span>
                             </div>
                             <span className='w-full h-auto frc justify-start text-slate-200 text-[23px] tracking-tighter'>
                               {data.Header_text}
                             </span>
                             <span id="Roboto" className='w-full h-auto frc justify-start text-white  text-[18px]  '>
                               {data.SECOND_text}
                             </span>
                             </div>
                             <div className='w-full h-[8px] absolute bottom-0 bg-red-600'></div>
                          </a>
                ))}       
                
            </div>
            </div>
        </div>
        <img
         src='/apex-section-bg-homepage-news-xl.jpg.adapt.1920w.jpg'
         className='w-full h-full'
        />
    </div>
  )
}

export default Session4