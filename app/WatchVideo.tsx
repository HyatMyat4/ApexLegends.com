"use client";
import React from "react";
import { useSelector } from "react-redux";
import { WatchGameplayC } from "../Redux/ActionSlice";
import { useState, useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import { WatchGameplayEngin } from "../Redux/ActionSlice";
import { useDispatch } from "react-redux";
function WatchVideo() {
  const Hidden = useSelector(WatchGameplayC);
  const dispatch = useDispatch()
  var items = Array(
    "lpN3tJTz9kE",
    "yUj-9faWDcM",
    "8E9p5r0icpw",
    "yUj-9faWDcM",
    "uMjn_GDFrUA",
    "NEAWC9eK1Ts",
    "QzfsGxrCD4o",
    "yUj-9faWDcM"
  );
  var item = items[Math.floor(Math.random() * items.length)];

  return (
    <div
      className={` w-full h-screen ${
        Hidden ? "" : " hidden"
      } bg-black absolute  frc justify-center z-[99999] top-0  text-white  left-0`}
    >
      <div onClick={() => dispatch(WatchGameplayEngin(false))} className=" absolute top-[20px] right-[20px]   hover:rotate-180 transition-all duration-300 cursor-pointer ">
        <HiXMark className="text-[40px]" />
      </div>
      <div className="w-full 1077:w-[70%] h-full m-auto frc">   
          <div className=" relative overflow-hidden w-[100%] pt-[56.25%]">
            {/* @ts-ignore */}
            <iframe frameborder="0"
              allowfullscreen="allowFullScreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item}`} 
              className=' absolute inset-0'         
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"              
            ></iframe>
          </div>  
      </div>
    </div>
  );
}

export default WatchVideo;
