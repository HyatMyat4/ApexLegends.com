"use client"
import React from "react";
import { FiPlay } from "react-icons/fi";
import { WatchGameplayEngin  } from '../../Redux/ActionSlice'
import { useDispatch  } from "react-redux";
function Session1() {
  const dispatch = useDispatch()
  return (
    <div
      id="Roboto"
      className="w-full h-[650px] bg-black relative  overflow-hidden "
    >
      <div className="w-full h-full fcc justify-center absolute inset-0 z-50 translate-y-[-60px] ">
        <img src="/apex-hero-medium-logo-light.svg" />
        <span className=" text-slate-200 text-[18px] text-center">
          Apex Legends: Revelry. Drop in and be legendary with new Team
          Deathmatch,
          <br />
          remastered Legend classes, the Nemesis rifle and more!
        </span>
        <div className=" w-full 450:w-auto fcc 720:frc mt-[20px] ">
          <a href="https://www.ea.com/en-us/games/apex-legends/play-now-for-free" className="px-[25px] text-[18px] 
          py-[15px] bg-red-600 rounded text-white hover:scale-105 transition-all duration-75 mr-[20px] cursor-pointer
          mb-[20px] 720:mb-0 hidden 450:flex
          ">
            PLAY FREE NOW*
          </a>
          <a href="https://www.ea.com/en-us/games/apex-legends/play-now-for-free" className="w-[95%] justify-center m-auto px-[25px] text-[18px] 
          py-[15px] bg-red-600 rounded text-white hover:scale-105 transition-all duration-75  cursor-pointer
          mb-[20px] 720:mb-0 flex 450:hidden
          ">
            PLAY FREE NOW*
          </a>
          <div onClick={() => dispatch(WatchGameplayEngin(true))} className="px-[25px] select-none text-[18px] hidden 450:flex frc  py-[15px] bg-red-600 rounded text-white hover:scale-105 transition-all duration-75 mr-[20px] cursor-pointer">
            WATCH GAMEPLAY TRAILER <FiPlay className="ml-[10px]" />
          </div>
          <div onClick={() => dispatch(WatchGameplayEngin(true))} className="w-[95%] select-none m-auto px-[25px] justify-center text-[18px] frc flex 450:hidden py-[15px] bg-red-600 rounded text-white hover:scale-105 
          transition-all duration-75  cursor-pointer">
            WATCH GAMEPLAY TRAILER <FiPlay className="ml-[10px]" />
          </div>
        </div>
      </div>
      <video
        className="w-[100%]  h-[100%] 1200:h-auto translate-y-[0px] 1400:translate-y-[-77px] hidden 850:flex "
        src="/apex-legends-revelry-section-bg-video-l.mp4"
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
  );
}

export default Session1;


