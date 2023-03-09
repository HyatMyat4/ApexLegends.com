import React from 'react'
import About3 from './About2chind'
import About31 from './About3'
import About4 from './About4'
import About5 from './About5'
import About6 from './About6'
import About7 from './About7'
import Session7 from '../(Session)/Session7'
import Session8 from '../(Session)/Session8'
import Session9 from '../(Session)/Session9'
function About2() {
  return (
    <div className='w-full h-auto '>
        <div className='w-full h-auto absolute  z-50 bg-[#e8e0d6]'>
            <div className='w-full  h-[400px] 750:h-auto  relative'>
             <div className=' absolute w-full frc h-full  z-[55] bg-[#00000058] 750:bg-transparent  '>
                <div className='w-[54%] 950:w-[60%] h-full hidden 750:flex  '>

                </div>
                <div  className='w-[85%] 600:w-[75%] 750:w-[40%] 950:w-[32%] m-auto 750:m-0  h-full fcc  items-start justify-center pr-[15px]  950:pr-0  '>
                   <div id="monospace" className=' text-[24px] 950:text-[28px] 1090:text-[40px] text-white font-bold tracking-tighter'>THE LEGENDS</div>
                   <div id="monospace" className=' text-[15px] 1090:text-[16px] 1247:text-[20px] text-white  tracking-tighter '>
                     Choose from a lineup of outlaws, soldiers, misfits, and misanthropes, each with their own set of skills. The Apex Games welcome all comers – survive long enough, and they call you a Legend.
                   </div>
                   <div className=" w-[100%] 750:w-auto fcc 720:frc mt-[20px] 950:mt-[25px] 1247:mt-[40px] ">
                    <a href="" id="monospace" className="w-[100%] 750:w-auto frc justify-center px-[30px] text-[18px] 
                    py-[12px]  rounded text-white bg-red-600 hover:scale-105 transition-all duration-75 mr-[20px]  cursor-pointer
                    mb-[20px] 720:mb-0 
                    ">
                     See the Roster
                    </a>
            
                </div>
                </div>
             </div>              
           <img
            src="/apex-hero-medium-about-legends-7x2-xl.png.adapt.crop7x2.1920w.png"
            className='mt-[40px] hidden 950:flex'
           />
           <img
            src="/apex-hero-medium-about-legends-7x2-xl.png.adapt.crop5x2.1455w.png"
            className='mt-[40px] hidden 750:flex 950:hidden'
           />        
           <div className='w-full h-[100%] bg-cover bg-center z-0 flex 750:hidden' 
            style={{ backgroundImage:`url(/apex-hero-medium-about-legends-7x2-xl.png.adapt.crop5x2.1455w.png)`}} >
           </div>
     
           </div>
           <About3/>  
           <About31/>
           <About4/>
           <About5/>
           <About6/>
           <About7/>
           <Session7/>
           <Session8/>
           <Session9/>
        </div>
        <div className='w-full h-[100%] bg-cover bg-center z-0 hidden  760:flex' 
       style={{ backgroundImage:`url(/apex-section-bg-beige-texture-xl.jpg.adapt.1920w.jpg)`}} >
        </div> 
    </div>
  )
}

export default About2