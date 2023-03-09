import React from 'react'

function About1() {
  return (
    <div
    id="Roboto"
    className="w-full h-[800px] 1148:h-auto   relative  overflow-hidden "
  >
         <img src="/apex-hero-large-about-video-banner-16x9-xl.png.adapt.crop16x9.1920w.png"
       className='w-full h-auto absolute z-0 top-0 left-0 hidden 1148:flex'
      />
    <div className="w-full h-full fcc justify-center absolute inset-0 z-50 translate-y-[30px] ">
  
      <img src="/apex-hero-medium-logo-light.svg" 
       className='w-[350px]'
      />
      <span id="Roboto" className=" text-slate-100 text-[25px] text-center mt-[20px]">
      Pick your character. Round up your squad. Show everyone what 
        <br />
        Legends are made of.
      </span>
      <span id="monospace" className=" text-slate-200 text-[16px] text-center mt-[10px]">
      PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, Nintendo Switch, and PC via 
        <br />
        EA App and Steam.
      </span>
      <div className=" w-full 450:w-auto fcc 720:frc mt-[40px] ">
        <a href="https://www.ea.com/games/apex-legends/play-now-for-free" className="px-[40px] text-[18px] 
        py-[15px]  rounded text-white hover:scale-105 transition-all duration-75 mr-[20px] border-[2px] border-white cursor-pointer
        mb-[20px] 720:mb-0 hidden 450:flex
        ">
          PLAY NOW
        </a>
  
      </div>
    </div>   
      <div className='w-full h-[100%] bg-cover bg-center z-0  flex 1148:hidden ' 
       style={{ backgroundImage:`url(/apex-hero-large-about-video-banner-16x9-xl.png.adapt.crop3x2.1023w.png)`}} >
        </div> 
    <video
      className="w-[100%]  h-full 1200:h-auto  hidden 1148:flex "
      src="/apex-hero-large-video-about-gameplay.mp4"
      muted
      // @ts-ignore
      autoPlay="autoplay"
      preload="auto"
      loop
    >
      {" "}
      something
    </video>
  </div>
  )
}

export default About1