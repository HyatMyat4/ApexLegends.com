"use client"
import React from 'react'
import { BsChevronDown  } from "react-icons/bs";
import { countries } from '../../constants'
import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
function Session6() {
    const [open , setopen] = useState<boolean>(false)
    const [country , setcountry ] = useState<string>("United States")
    const [Check , setCheck] = useState<boolean>(false)

    const handleSet = (e : string) => {
      setcountry("")
      setopen(false)
      setcountry(e)     
    }
  return (
    <div  className='w-full h-[900px] 720:h-[800px] 1225:h-[600px]  overflow-hidden  relative'>
      <div  onClick={() => setopen(false) } className={`w-full h-full ${open ? "" : "hidden"}   absolute z-20`}>

      </div>
        <div className=' w-full h-full absolute frc justify-center  '>
            <div className='w-[98%] 1400:w-[1300px] h-full  fcc 1225:frc justify-center m-auto'>
               <div className='w-[98%] 720:w-[78%] 1225:w-[45%] h-[30%] 1225:h-full  fcc  items-start p-[20px]  '>
                     <span id="monospace" className='text-black font-extrabold text-[20px] 350:text-[35px] mt-[15px] 450:mt-[80px] tracking-tighter '>SIGN UP FOR APEX LEGENDS™ NEWS</span>
                     <p id="monospace" className=' text-start text-[18px] mt-[10px] 450:mt-[50px]'>
                     Sign up today to receive the latest Apex Legends™ news, updates, behind-the-scenes content, offers, and more (including other EA news, products, events, and promotions) by email.   
                     </p>  
                </div>
                <div className='w-full 1225:w-[55%]  h-full   '>
                 <div className='mt-[130px] w-[98%] 720:w-[75%] h-[60px]    m-auto rounded-[3px]'>
                     <input
                     type={'text'}
                     placeholder="Email"
                     className='w-full h-full p-[20px]  border-[2px] rounded-[3px] border-black  outline-none bg-transparent text-[17px]'
                     />
                 </div>
                 <div className='mt-[35px] w-[98%] 720:w-[75%] h-[60px] frc justify-between m-auto'>
                  <div className='w-full 400:w-[40%] h-full   rounded-[3px] mt-0 400:mr-[15px]'>
                      <input
                      type={'text'}
                      placeholder="Birthdate"
                      className='w-[98%] h-full p-[20px]   border-[2px] rounded-[3px] border-black  outline-none bg-transparent text-[17px]'
                      />
                  </div>
                  <div id="monospace"  className=' cursor-pointer hidden 400:inline relative w-[60%] h-full  border-[2px]  border-black  outline-none  rounded-[3px]'>
                     <div onClick={() => setopen(true)} className=''>
                        <span  className='  pt-[4px] frc px-[25px] text-gray-400 text-[14px]'>Country</span>
                        <span className=' frc justify-between  px-[25px] text-[black] text-[17px]'>{country.slice(0,25)} 
                        <BsChevronDown className={`transform  ${open ? 'rotate-[180deg]' : "" }  transition-all  duration-200`}/></span>
                       </div>
                       <div className={` absolute top-[-2px] z-50 rounded-[3px] ${open ? "" : "hidden"} left-[-2px] w-[360px] h-[280px] overflow-y-scroll shadow-lg bg-[#FFFFFF] border-[3px] border-black`}>
                         {
                          countries.map((data) => (
                            <div onClick={(e) => handleSet(data.label.slice(0,100))} className='w-[78%] m-auto h-[56px] frc  justify-between border-b-[2px] border-gray-200 py-[30px] text-[18px] text-gray-600 '>
                               {data.label} <div><BiCheck className={`text-[25px] text-emerald-500 ${country === data.label ? "" : " hidden" }`}/></div>
                            </div>
                          ))
                         }
                       </div>
                  </div>
                 </div>
                 <div className='w-[98%] 720:w-[75%] h-auto mt-[30px] fcc m-auto select-none'>
                    <div className='w-full h-[150px]  frc items-start '>
                       <div onClick={() => setCheck(!Check)} className='w-[20px] mt-[4px] cursor-pointer h-[20px] border-[2.5px] border-black rounded-[3px] frc justify-center'>
                          <div className='w-[20px]'>
                            <BiCheck className={`text-[20px] text-black ${Check  ? "" : " hidden" }`}/>
                          </div>
                       </div>
                       <div>
                          <p id="monospace" className='px-[10px] text-[15px] 1090:text-[18px]'>
                          I can unsubscribe at any time by changing my <span className='text-red-500'> email preferences,</span> contacting <span className='text-red-500'>
                            privacyadmin.ea.com,</span> or writing to Electronic Arts Inc., ATTN: Email Opt-Out, 209 Redwood Shores Pkwy, Redwood City, CA, 94065, USA.
                          </p>
                       </div>
                    </div>   
                 </div>
               <div className='w-[98%] 720:w-[75%] h-auto frc  justify-center 400:justify-start m-auto mt-[70px]  400:mt-0 1225:mt-[20px]'>
               <div id="monospace" className=' text-white bg-red-600 hover:scale-105 transition-all duration-75 cursor-pointer rounded-[3px] px-[30px] py-[15px]'>
                     SING UP
                 </div>
               </div>
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

export default Session6