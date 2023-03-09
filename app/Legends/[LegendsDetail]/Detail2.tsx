import React from 'react'
type Props = {
    data : LEGENDSDETAIL | undefined
}
function Detail2({data} : Props) {
  return (
    <div className='w-full h-auto 890:h-[890px] relative bg-[#E6E1DA]  overflow-hidden  '>
         <div className='w-[100%] h-auto overflow-hidden inline  890:hidden   '>
         <img
            src={data?.LEGENDS_IMG2}
            className='w-full h-auto'
         />
       </div> 
    <div className='w-full   relative 890:absolute h-full  fcc 890:frc justify-between'>
        <div className='w-0 890:w-[50%] h-full'></div>
        <div className='w-full 890:w-[50%] h-full p-[20px] 890:p-[10px] '>
            <div className='w-full 1390:w-[70%] h-full  fcc items-start  justify-center text-black '>                   
          <div className='w-full h-[50%] fcc items-start justify-around '>
            <span className=' text-[16px] 1000:text-[18px] mt-[20px]'>{data?.VOICE_1}</span>
            <span className='tracking-tighte text-[40px] font-bold mt-[20px]'>{data?.NAME}</span>
            <span className='text-[28px] mt-[20px]'>{data?.LEGENDS_SKILL_EXP}</span>
            <p className='text-[16px] 1000:text-[18px]'>{data?.SKILL_EXP1}</p>
            <span className='text-red-500 text-[20px] mt-[15px] 1000:mt-[20px]'>Read More</span>
          </div>
          <div className='w-full h-[40%]  frc   justify-start mt-[10px] 1000:mt-[30px]  '>
              <div className='w-auto 500:min-w-[200px] h-auto text-[20px] fcc items-start tracking-tighter '>
                  <div className=' mb-0 500:mb-[10px]'>Real Name</div>
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.RealName}</div>
                  <div className='mb-0 500:mb-[10px]'>Age</div>
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.Age}</div>
                  <div className='mb-0 500:mb-[10px]'>Home World</div>
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.HomeWorld}</div>
                  <div className='mb-0 500:mb-[10px]'>Class</div>
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.Class}</div>
                  <div className='mb-0 500:mb-[10px]'>Tactical Ability</div>
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.TacticalAbility}</div>
                  <div className='mb-0 500:mb-[10px]'>Passive Ability</div>
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.PassiveAbility}</div>
                  <div className='mb-0 500:mb-[10px]'>Ultimate Ability</div>  
                  <div className='mb-[15px] text-[18px] text-[#585858] flex 500:hidden'>{data?.UltimateAbility}</div>                        
              </div>                     
              <div className='w-auto h-auto text-[20px] text-[#585858] fcc items-start hidden 500:flex '>
                  <div className='mb-[10px]'>{data?.RealName}</div>
                  <div className='mb-[10px]'>{data?.Age}</div>
                  <div className='mb-[10px]'>{data?.HomeWorld}</div>
                  <div className='mb-[10px]'>{data?.Class}</div>
                  <div className='mb-[10px]'>{data?.TacticalAbility}</div>
                  <div className='mb-[10px]'>{data?.PassiveAbility}</div>
                  <div className='mb-[10px]'>{data?.UltimateAbility}</div>                          
              </div>                                
          </div>
        </div>
        </div>
    </div>
     <div className='w-[100%] h-full overflow-hidden hidden 890:inline'>
         <img
            src={data?.LEGENDS_IMG}
         />
     </div>         
</div>
  )
}

export default Detail2