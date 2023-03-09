import React from 'react'

function Legands1() {
  return (
    <div className='w-full h-[490px] relative  '>
    <div className='w-full h-[100%] bg-cover bg-center z-0 ' 
     style={{ backgroundImage:`url(https://media.contentapi.ea.com/content/dam/apex-legends/common/revelry/apex-s16-section-bg-legends-header-xl.jpg.adapt.1920w.jpg)`}} >
    </div>
    <div className="w-full h-full fcc justify-center absolute inset-0 bg-[#0000003b]   z-50  m-auto "></div>
    <div className="w-full 1000:w-[1000px] h-full fcc justify-center absolute inset-0   z-50  m-auto ">
        <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-white-icon.svg" />
        <span id="monospace" className=" text-slate-200 text-[40px] font-bold text-center mt-[50px] tracking-tighter">
          MEET THE LEGENDS
        </span>
        <span id="Roboto" className=" text-slate-200 text-[18px] 550:text-[23px]  text-center mt-[30px] ">
           It takes grit, talent, and a lot of luck to become a Legend. Pick your favorite and see what their unique set of skills can do for your squad.
        </span>

      </div>
   </div>
  )
}

export default Legands1