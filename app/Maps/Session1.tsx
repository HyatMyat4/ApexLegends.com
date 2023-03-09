import React from 'react'

function Session1() {
  return (
    <div className='w-full h-auto relative'>
        <div id="monospace"  className='w-full 1200:w-[1200px] text-white h-auto z-50 relative m-auto fcc justify-center'>
             <div className=' text-[30px] 800:text-[40px] font-bold  mt-[50px] text-center'>DISCOVER THE MAPS OF THE APEX GAMES</div>
             <p className=' text-center  text-[18px] 800:text-[20px] 1200:text-[23px] my-[10px]'>Kings Canyon, World’s Edge, and Olympus. You’ve fought there, you’ve died there, but do you know why they were chosen? Hammond Robotics and the Mercenary Syndicate seem to have a hand in everything that shapes the destiny of the Outlands... Learn more about the maps that host the Apex Games.</p>
             <div className='my-[30px] px-[25px] py-[17px] cursor-pointer hover:scale-105 transition-all duration-100 rounded-[3px] text-[20px] border-[2px] border-white '>
                Battle Royale Maps
             </div>
        </div>
        <div className='w-full h-[100%]  bg-cover bg-center z-0  absolute top-0 ' 
            style={{ backgroundImage:`url(https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-section-bg-red-grit-texture-xl.jpg.adapt.1920w.jpg)`}} >
        </div>
    </div>
  )
}

export default Session1

//