import React from 'react'
import { TfiAngleDoubleRight , TfiAngleDoubleLeft } from "react-icons/tfi";
import Link from 'next/link';
type Props = {
    data : LEGENDSDETAIL | undefined
}
function Detail1({data} : Props) {
    console.log(data?.VIDEO,'🍧🍧🍧')
  return (
    <div className='w-full h-auto 1390:h-[550px] overflow-hidden relative'>
    <div className='w-full h-full absolute  frc z-50 hidden 800:flex'>
        <div  className='w-full h-[70px] frc justify-between '>
           <Link href={`/Legends/${data?.FRIENDS_1_Name}`} className='w-auto h-full bg-black  p-[15px] cursor-pointer frc animate-slideleft justify-center'>
                <TfiAngleDoubleLeft className='text-[40px] hover:scale-125 transition-all duration-150 '/>
                <span className='text-[18px]'>{data?.FRIENDS_1_Name}</span>
           </Link>
           <Link href={`/Legends/${data?.FRIENDS_2_Name}`} className='w-auto h-full p-[15px] cursor-pointer bg-black frc  animate-slideright justify-center'>
                <span className='text-[18px] ' >{data?.FRIENDS_2_Name}</span>
                <TfiAngleDoubleRight className='text-[40px] hover:scale-125 transition-all duration-150 '/>
                
           </Link>
        </div>
    </div>
  <video
     className={`w-[100%]  h-auto 1200:h-auto ${data?.NAME === "FUSE" ? " hidden" : "" }   `}
     src={data?.VIDEO}
     muted
     // @ts-ignore
     autoPlay="autoplay"
     preload="auto"
     loop
     >
     {" "}
     something
     </video>
     <img
      src='https://media.contentapi.ea.com/content/dam/apex-legends/common/season-8/fuse-page/apex-hero-section-bg-legends-concept-fuse-7x2-xl.jpg.adapt.1920w.jpg'
      className={`w-full h-full ${data?.NAME === "FUSE" ? " " : "hidden" }`}
     />
 </div>
  )
}

export default Detail1

// 