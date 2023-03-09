import React from "react";

function Session2() {
  return (
    <div className="w-full h-[800px] 760:h-[460px] relative">
    
      <div className="w-full h-full   absolute z-10 frc justify-between">
        <div className="w-0 760:w-[38%]"></div>
        <div className="w-full 760:w-[62%] h-full frc  justify-center">
      <div className="w-full h-auto fcc justify-center">
      <span
            id="monospace"
            className=" text-[25px] 330:text-[30px] 400:text-[35px] 1400:text-[45px] text-white font-bold tracking-[-.0.99em]"
          >
            DROPIN.BELEGENDARY.
          </span>
          <p
            id="Roboto"
            className="w-[100%] 400:w-[61%] text-[15px] 330:text-[15px]  400:text-[16px] 1400:text-[19px] text-center text-white tracking-wide"
          >
            Apex Legends is celebrating its legacy and toasting its future in
            Apex Legends: Revelry! New Team Deathmatch limited-time mode joins
            the Games, and remastered Legend classes transform the way our
            Legends play. Wield the new Nemesis rifle and squad up and slay with
            over 100 new rewards in the Revelry Battle Pass.
          </p>
          <a href="https://www.ea.com/games/apex-legends/revelry"
            id="monospace"
            className=" px-[27px] text-[18px] py-[15px] hidden 760:inline bg-red-600 rounded mt-[15px] text-white hover:scale-105
             transition-all duration-75  cursor-pointer"
          >
            Learn More
          </a>
          <a href="https://www.ea.com/games/apex-legends/revelry"
            id="monospace"
            className="w-[90%] 760:w-0 frc justify-center  flex  760:hidden px-[27px] text-[18px] py-[15px] bg-red-600 rounded mt-[15px] text-white 
            hover:scale-105 transition-all duration-75   cursor-pointer m-auto"
          >
            Learn More
          </a>
      </div>
        </div>
      </div>
      <div className='w-full h-[100%] bg-cover bg-center z-0 hidden  760:flex' 
       style={{ backgroundImage:`url(/apex-hero-md-s16-home-page-7x2-xl.jpg.adapt.crop7x2.1920w.jpg)`}} >
        </div> 
      <div className='w-full h-[100%] bg-cover bg-center z-0 flex  760:hidden' 
       style={{ backgroundImage:`url(/apex-hero-md-s16-home-page-7x2-xl.jpg.adapt.crop16x9.767w.jpg)`}} >
        </div> 
        
    </div>
  );
}

export default Session2;
