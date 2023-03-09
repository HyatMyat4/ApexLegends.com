import React from 'react'
import { LEGENDS } from '../../../constants'
import Link from 'next/link'
import Session8 from '../../(Session)/Session8'
import Session9 from '../../(Session)/Session9'
function Detail5() {
  const LEGENDS_data = LEGENDS[Math.floor(Math.random()*LEGENDS.length)];
  console.log(LEGENDS_data,'🍸🍸🍸')
  return (
    <div className='w-full h-auto bg-[#E7E0D8] text-black'>
      <div className='w-full 1300:w-[1300px] h-auto m-auto frc justify-around 1300:justify-between flex-wrap '>
          {LEGENDS.map(legend => (
                <Link href={`/Legends/${legend.NAME}`} key={legend.NAME} className={`w-full 905:w-[400px] h-auto 905:h-[600px]   z-50 fcc overflow-hidden`}>
                    <img
                      src={legend.IMG}
                    />
                    <div id="monospace" className={`text-[28px] ${legend.NAME === "Revenant" ? " translate-y-[-30px]" : ""} text-black`}>{legend.NAME}</div>
                    
                </Link>
             ))}
      </div>
        <Session8/>
        <Session9/>
    </div>
  )
}

export default Detail5