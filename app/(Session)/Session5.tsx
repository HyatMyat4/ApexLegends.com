import React from 'react'
import { BATTLE_ROYAL } from '../../constants'
function Session5() {
  return (
    <div className='w-full h-[1950px] 720:h-[1300px] 1077:h-[700px] overflow-hidden relative'>
        <div className='w-full h-full absolute'>
        <div className='w-[98%] 1400:w-[1300px] h-full m-auto '>
             <div id="monospace" className='w-full h-[15%] text-center mt-[15px] frc justify-center text-white text-[40px] tracking-tighter font-bold'>
                BEYOND BATTLE ROYALE
             </div>
             <div id="Roboto" className='w-full h-[10%] mb-[20px]  text-center text-[20px] frc justify-center text-white  tracking-tighter '>
                Show 'em what you're made of in Apex Legends, a free-to-play hero shooter where <br/>
                 contenders from across the Frontier team up to battle for glory, fame, and fortune.
             </div>
             <div className='w-full h-[75%] text-white  frc items-start  justify-around flex-wrap'>
                {BATTLE_ROYAL.map(data => (
                            <div  className='w-[350px] h-[440px] 1225:h-[90%]    fcc  '>
                            <img
                             src={data.IMAGE}
                             className='w-full h-auto'
                            />
                            <span id="monospace" className='text-[23px] mt-[20px] font-bold'>{data.Header_text}</span>
                            <p id="Roboto" className='text-center mt-[10px] text-[18px]'>
                              {data.SECOND_text}
                            </p>
                        </div>
                ))}           
             </div>
             </div>
        </div>
       <img
         src="/apex-section-bg-battle-royale-homepage-xl.jpg.adapt.1920w.jpg"
         className='w-full h-auto'
       />
    </div>
  )
}

export default Session5