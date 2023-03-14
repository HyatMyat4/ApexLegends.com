import React from 'react'

function Session3() {
  return (
    <div className='w-full h-[800px] 760:h-[475px] relative '>
              <div className="w-full h-full   absolute z-10 frc justify-between">
        <div className=" w-0 760:w-[38%]"></div>
        <div className=" w-[100%] 760:w-[62%] h-full frc justify-center">
        <div className="w-full h-auto fcc justify-center">
          <span
            id="monospace"
            className=" text-[30px] 400:text-[45px]  760:text-[35px] 1400:text-[45px] text-center text-white font-bold "
          >
            TEAM DEATHMATCH
          </span>
          <p
            id="Roboto"
            className="w-[100%] 400:w-[61%] text-[15px] 400:text-[18px] 760::text-[16px] 1400:text-[19px] text-center text-white tracking-wide"
          >
            Drop into new Team Deathmatch, a 6 vs. 6 mode where points <br/>
            are scored by taking your opponents.
          </p>
          <a href='https://www.ea.com/en-us/games/apex-legends/modes/team-deathmatch'
            id="monospace"
            className="px-[27px] text-[18px] py-[15px] hidden  760:flex bg-white rounded mt-[15px] text-black hover:scale-105 
            transition-all duration-75  m-auto cursor-pointer"
          >
            Learn More
          </a>
          <a href='https://www.ea.com/en-us/games/apex-legends/modes/team-deathmatch'
            id="monospace"
            className="w-[90%] 760:w-0 frc justify-center  px-[27px] text-[18px] flex  760:hidden  py-[15px] bg-white rounded mt-[15px]
             text-black hover:scale-105 transition-all duration-75  m-auto cursor-pointer"
          >
            Learn More
          </a>
          </div>
        </div>
      </div>
        <div className='w-full h-[100%] bg-cover bg-center z-0 ' 
          style={{ backgroundImage:`url(/apex-hero-md-s16-team-death-match-7x2-xl.jpg.adapt.crop7x2.1920w.jpg)`}} >
        </div>      
           
    </div>
  )
}

export default Session3