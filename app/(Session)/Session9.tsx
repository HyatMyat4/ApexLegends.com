import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

function Session9() {
  return (
    <div className='w-full h-[500px] 400:h-[300px] 1225:h-[250px] bg-[#F3F3F3] '>
        <div className='w-[98%] 1400:w-[1300px]  h-full  frc justify-between m-auto  '>
            <div className='w-[7%] h-full   frc items-start hidden 1225:inline'>
                <img
                  src='/october-ea-ring.png'
                  className='w-[68%] mt-[25px]'
                />
            </div>
            <div id="monospace" className='w-[93%]  h-full  '>
               <div className='w-full h-[50%] frc justify-between flex-wrap '>
                   <a href='https://www.ea.com/games' className='text-[20px] text-[#181818] mr-[15px]'>BROWSE</a>
                   <a href='https://www.ea.com/about' className='text-[20px] text-[#181818] mr-[15px]'>ABOUT</a>
                   <a href='https://help.ea.com/' className='text-[20px] text-[#181818] mr-[15px]'>SUPPORT</a>
                   <a href='https://www.ea.com/ea-app' className='text-[20px] text-[#181818] mr-[15px]'>SHOP ON EA APP</a>
                   <a href='https://www.ea.com/able' className='text-[20px] text-[#181818] mr-[15px]'>ACCESSIBILITY</a>
                   <div className='w-[200px] h-[62px] border-[2px] cursor-default hover:scale-105 transition-all duration-75 rounded-[3px] border-[#181818] fcc px-[20px] items-start py-[5px]'>
                        <span className='text-[16px] text-gray-500'>Language</span>
                        <div className='w-full h-auto frc'>
                          <img
                            src="/Us.svg"
                            className='w-[25px] h-auto mr-[5px]'
                          /><span>United State</span> <BsChevronDown className={`transform    transition-all  duration-200`}/>
                        </div>  
                   </div>
               </div>
               <div className='w-full h-[50%] 1225:h-[38%] fcc 400:frc justify-between '>
                  <div className='w-auto h-auto fcc items-center  400:items-start'>
                       <div className=' frc text-[17px] mb-[20px] 400:mb-[5px]'>
                          <div>Legal & Privacy</div>
                          <div className=' ml-[40px]'>User Agreement</div>
                       </div>
                       <div className='mb-[5px]'>Privacy & Cookie Policy (Your Privacy Rights)</div>
                       <div  className='mb-[5px]'>© 2023 Electronic Arts Inc.</div>
                  </div>
                  <div className=''>
                       <img
                        src="/seal.svg"
                       />
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Session9