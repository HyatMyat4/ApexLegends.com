"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

import "../../../styles/globals.css";

// import required modules
import { Navigation } from "swiper";
type Props = {
    data : LEGENDSDETAIL | undefined
}
function Detail4({data} : Props) {
  return (
    <div className='w-full h-auto 1300:h-[800px] bg-[#E4E0D7] frc justify-center '>        
    <div className='w-full 1000:w-[90%] 1700:w-[65%] h-[90%]  m-auto frc justify-center my-[30px] 1300:my-0 '>
    <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper text-black select-none"
        loop={true}
        >         
        <SwiperSlide className="w-full h-full frc justify-center ">
        <div className=" relative overflow-hidden w-full 600:w-[85%] 1000:w-[90%] frc justify-center pt-[56.25%] m-auto rounded-0 600:rounded-[5px]">
      {/* @ts-ignore */}
        <iframe frameborder="0"
            allowfullscreen="allowFullScreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data?.Swipe_VIDEO.VD1}`} 
            className=' absolute inset-0'         
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            ></iframe>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" relative overflow-hidden w-full 600:w-[85%] 1000:w-[90%] pt-[56.25%] m-auto rounded-[5px]">
      {/* @ts-ignore */}
        <iframe frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data?.Swipe_VIDEO.VD2}`} 
            className=' absolute inset-0'         
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            
            ></iframe>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  overflow-hidden w-full 600:w-[85%] 1000:w-[90%] m-auto rounded-0 600:rounded-[5px]">
             <img
               src={data?.Swipe_VIDEO.IMG1}
             />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  overflow-hidden w-full 600:w-[85%] 1000:w-[90%] m-auto rounded-0 600:rounded-[5px]">
             <img
               src={data?.Swipe_VIDEO.IMG2}
             />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  overflow-hidden w-full 600:w-[85%] 1000:w-[90%] m-auto rounded-0 600:rounded-[5px] ">
             <img
               src={data?.Swipe_VIDEO.IMG3}
             />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="  overflow-hidden w-full 600:w-[85%] 1000:w-[90%] m-auto rounded-0 600:rounded-[5px] ">
             <img
               src={data?.Swipe_VIDEO.IMG4}
             />
        </div>
        </SwiperSlide>     
      </Swiper>
       
    </div>
</div>
  )
}

export default Detail4





