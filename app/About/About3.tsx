import React from 'react'

function About() {
  return (
    <div className='w-full h-[400px] 750:h-auto  relative mt-[70px]  mb-[10px] '>
    <div className=' absolute w-full 750:w-[91%] right-0 frc h-full  z-[55] bg-[#00000058] 750:bg-transparent  '>
       <div className=' w-[85%] 600:w-[75%] 750:w-[33%] h-full fcc  items-start  justify-center  m-auto 750:m-0  '>        
         <div id="monospace" className=' text-[28px] 1090:text-[40px] text-white font-bold tracking-tighter'>THE LEGENDS</div>
          <div id="monospace" className=' text-[15px]  1090:text-[16px] 1247:text-[20px] text-white  tracking-tighter '>
            Choose from a lineup of outlaws, soldiers, misfits, and misanthropes, each with their own set of skills. The Apex Games welcome all comers – survive long enough, and they call you a Legend.
          </div>
          <div className=" w-[100%] 750:w-auto fcc 720:frc mt-[20px] 1319:mt-[40px] ">
           <a href="" id="monospace" className="px-[30px] text-[18px]  w-[100%] 750:w-auto
           py-[12px]  rounded text-white bg-red-600 hover:scale-105 transition-all duration-75 mr-[20px]  cursor-pointer
           mb-[20px] 720:mb-0  frc justify-center
           ">
            See the Roster
           </a>
   
       </div>
        
       </div>
       <div  className=' w-[60%] h-full fcc  items-start justify-center hidden 750:flex  '>
 
       </div>
    </div>              
  <img
   src="/apex-hero-medium-about-beyond-br-7x2-xl.png.adapt.crop7x2.1920w.png"
   className='mt-[40px] hidden 950:flex'
  />
  <img
   src="/apex-hero-medium-about-beyond-br-7x2-xl.png.adapt.crop2x1.1023w.png"
   className='mt-[40px] hidden 750:flex 950:hidden'
  />
    <div className='w-full h-[100%] bg-cover bg-center z-0 flex 750:hidden' 
            style={{ backgroundImage:`url(/apex-hero-medium-about-beyond-br-7x2-xl.png.adapt.crop2x1.1023w.png)`}} >
    </div>
  </div>
  )
}

export default About