import React from 'react'

function Session7() {
  return (
    <div className='w-full h-[600px] relative overflow-hidden bg-black'>
        <div className='w-full h-full fcc  absolute  z-50  m-auto'>
          <div className='w-[98%] 1400:w-[1300px] h-full m-auto '>
           <div className='w-full mt-[40px] h-[20%]   frc justify-center'>
               <img
                src='/apex-platform-logos.svg'
               />
           </div>
           <div id="monospace" className='w-full h-[10%] 1225:h-[15%] text-white  font-bold text-[35px] tracking-tighter  frc justify-center'>
               PLAY FOR FREE*
           </div>
           <div id="monospace" className='w-full h-[15%]  text-slate-200 text-[18px]  1225:text-[24px] text-center   frc justify-center tracking-tighter '>
            On PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S, Nintendo Switch, and PC via EA App and Steam
           </div>
           <div className='w-full h-auto frc justify-center mt-[30px] 1225:mt-[10px]'>
            <a href='https://www.ea.com/games/apex-legends/play-now-for-free' id="monospace" className=' text-[#F3F3F3] text-[20px] bg-red-600 hover:scale-105 transition-all duration-75 cursor-pointer rounded-[4px] px-[30px] py-[15px]'>
                      PLAY FREE NOW
            </a>
           </div>
           <div id="monospace" className='w-full h-[15%] text-center mt-[40px] text-slate-200   text-[15px]  frc justify-center'>
           *Applicable platform account and platform subscription (sold separately) may be required. Persistent internet connection and EA account required. Age 
            restrictions apply. Includes in-game purchases.
           </div>
           </div>
        </div>
      <div className='w-full h-[100%] bg-cover bg-center z-0' 
       style={{ backgroundImage:`url(/Footer.jpg)`}} >
        </div>
    </div>
  )
}

export default Session7