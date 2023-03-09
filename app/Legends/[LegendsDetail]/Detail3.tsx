import React from 'react'
type Props = {
    data : LEGENDSDETAIL | undefined
}
function Detail3({data} : Props) {
  return (
    <div className='w-full h-auto  relative  overflow-hidden pb-[40px] '>
    <div className='w-full h-auto   z-50  fcc'>
          <div className='w-full h-auto frc justify-center my-[40px] z-50'>
               <div className='w-[500px] h-auto  fcc justify-center'>
                  <img
                    src={data?.CLASS_IMG}
                   className='w-full h-auto'
                  />
                   <span className='text-[20px] text-red-600'>CLASS</span>
                   <span className='text-center text-[25px]'>{data?.CLASS}</span>
                   <p className=' text-center text-[20px]'>
                    {data?.CLASS_text}
                   </p>
               </div>
          </div>
          <div className='w-full h-auto frc justify-around flex-wrap z-50'>
             <div className='w-[500px] h-auto  fcc justify-center'>
                  <img
                    src={data?.TacticalAbility_IMG}
                   className='w-full h-auto'
                  />
                   <span className='text-[20px] text-red-600'>TACTICAL ABILITY</span>
                   <span className='text-[25px]'>{data?.TacticalAbility}</span>
                   <p className=' text-center text-[20px]'>
                     {data?.TacticalAbility_detail}
                   </p>
               </div>
             <div className='w-[500px] h-auto  fcc justify-center'>
                  <img
                    src={data?.PassiveAbility_IMG}
                   className='w-full h-auto'
                  />
                   <span className='text-[20px] text-red-600'>PASSIVE ABILITY</span>
                   <span className='text-[25px]'>{data?.PassiveAbility}</span>
                   <p className=' text-center text-[20px]'>
                     {data?.PassiveAbility_detail}
                   </p>
               </div>
             <div className='w-[500px] h-auto  fcc justify-center'>
                  <img
                    src={data?.UltimateAbility_IMG}
                   className='w-full h-auto'
                  />
                   <span className='text-[20px] text-red-600'>ULTIMATE ABILITY</span>
                   <span className='text-[25px]'>{data?.UltimateAbility}</span>
                   <p className=' text-center text-[20px]'>
                     {data?.UltimateAbility_detail}
                   </p>
               </div>
          </div>
          <div className='w-full h-[100%] bg-cover bg-center z-0  absolute ' 
      style={{ backgroundImage:`url(https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/catalyst/apex-section-bg-legends-catalyst-abilities-xl.jpg.adapt.1456w.jpg)`}} >
          </div> 
    </div>
     
  
  </div>
  )
}

export default Detail3