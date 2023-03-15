"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBarEngin, SideBarC } from "../Redux/ActionSlice";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { BsChevronDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { ABOUT, SOCAL, FREEDOWLOAD } from "../constants";
import Link from "next/link";
import { useState } from "react";
function Sidebar() {
  const dispatch = useDispatch();
  const openclose = useSelector(SideBarC);
  const [drop ,setdrop] = useState<boolean>(false)
  const [MODES ,setMODES] = useState<boolean>(false)
  const [COMMUNITY ,setCOMMUNITY] = useState<boolean>(false)
  const [SOCAL1 ,setSOCAL1] = useState<boolean>(false)
  const [COMPLETE ,setCOMPLETE] = useState<boolean>(false)
  return (
    <div
      id="monospace"
      className={`w-full 400:w-[350px] h-[100vh] bg-black bottom-0  z-[999] fixed fcc ${
        openclose ? "" : "hidden"
      }  animate-slideleft2 overflow-hidden `}
    >
      <div className="w-full h-[70px] frc justify-center relative">
        <img src="/ApexTextlogo.svg" className="w-[70px]" />
        <div
          onClick={() => dispatch(SideBarEngin(false))}
          className={`mr-[15px] ml-[20px] hover:animate-Fastspin absolute right-0  flex ${
            openclose ? "" : " hidden"
          } 1090:hidden `}
        >
          <HiOutlineXMark className="text-white text-[40px] cursor-pointer" />
        </div>
      </div>

      <div className=" w-full h-auto select-none">
      <div onClick={() => setdrop(!drop)} className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${drop ? "border-rose-600" : "border-white"}  m-auto frc justify-between`}>
            <span>ABOUT</span>
            <div className=" text-[18px]">
              <BsChevronDown className={` text-[18px] ${drop ? "transform rotate-[180deg]  transition-all  duration-300  " : "transform rotate-[0deg]  transition-all  duration-300"}`} />
            </div>
          </div>
      {ABOUT.map((data) => (
        <Link
          href={data.Link}
          key={data.name}     
          className={`${drop ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${drop ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>{data.name}</span>
           
          </div>
        </Link>
      ))}
      </div>
      <div className=" w-full h-auto select-none">
      <div onClick={() => setMODES(!MODES)} className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${MODES ? "border-rose-600" : "border-white"}  m-auto frc justify-between`}>
            <span>MODES</span>
            <div className=" text-[18px]">
              <BsChevronDown className={` text-[18px] ${MODES ? "transform rotate-[180deg]  transition-all  duration-300  " : "transform rotate-[0deg]  transition-all  duration-300"}`} />
            </div>
          </div>
    
        <a
          href="https://www.ea.com/games/apex-legends/modes/team-deathmatch"           
          className={`${MODES ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${MODES ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>Team Deathmatch</span>
          
          </div>
        </a>
        <a
          href="https://www.ea.com/games/apex-legends/modes/battle-royale"           
          className={`${MODES ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${MODES ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>Battle Royale</span>
            <div className=" text-[18px]">
              <GoPlus className="text-[18px] transform group-hover:rotate-[180deg]  transition-all  duration-300" />
            </div>
          </div>
        </a>

      </div>
      <a href="https://www.ea.com/en-us/games/apex-legends/revelry" className=" w-full h-auto select-none">
      <div className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b  border-white  m-auto frc justify-between`}>
            <span>SEASON</span>          
          </div>
      </a>
      <a href="https://www.ea.com/en-us/games/apex-legends/revelry" className=" w-full h-auto select-none">
      <div className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b  border-white  m-auto frc justify-between`}>
            <span>BATTLEPASS</span>          
          </div>
      </a>
      <div className=" w-full h-auto select-none">
      <div onClick={() => setCOMMUNITY(!COMMUNITY)} className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${COMMUNITY ? "border-rose-600" : "border-white"}  m-auto frc justify-between`}>
            <span>COMMUNITY</span>
            <div className=" text-[18px]">
              <BsChevronDown className={` text-[18px] ${COMMUNITY ? "transform rotate-[180deg]  transition-all  duration-300  " : "transform rotate-[0deg]  transition-all  duration-300"}`} />
            </div>
          </div>
    
        <div                
          className={`${COMMUNITY ? "" : " hidden"} cursor-pointer group`}    
        >
             <div  className=" z-30 w-full h-auto ">
          <div onClick={() => setSOCAL1(!SOCAL1)}  className={`w-[92%] h-[60px]   text-white border-b ${COMMUNITY ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>SOCAL</span>
            <div className=" text-[18px]">
              <GoPlus className={`text-[18px] transform  ${SOCAL1 ? "rotate-[45deg]" : "group-hover:rotate-[180deg]"}  transition-all  duration-300`} />
            </div>
          </div>
          {SOCAL.map((data) => (
        <a
          href={data.Href}
          key={data.Name}     
          className={`${SOCAL1 ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[40px]   text-white m-auto frc justify-between`}>
            <span>{data.Name}</span>
           
          </div>
        </a>
      ))}
      <div className={`w-[92%] h-[2px] bg-white m-auto ${SOCAL1 ? "" : "hidden"} `}></div>
          </div>
        </div>
        <a
          href="https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en"           
          className={`${COMMUNITY ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${COMMUNITY ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>COMMUNITY</span>
         
          </div>
        </a>
        <a
          href="https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en"           
          className={`${COMMUNITY ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${COMMUNITY ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>MERCHANDISE</span>          
          </div>
        </a>

      </div>
      <div className=" w-full h-auto select-none">
      <div onClick={() => setCOMPLETE(!COMPLETE)} className={`w-[92%]  h-[60px] cursor-pointer  text-white border-b ${COMPLETE ? "border-rose-600" : "border-white"}  m-auto frc justify-between`}>
            <span>COMPLETE</span>
            <div className=" text-[18px]">
              <BsChevronDown className={` text-[18px] ${COMPLETE ? "transform rotate-[180deg]  transition-all  duration-300  " : "transform rotate-[0deg]  transition-all  duration-300"}`} />
            </div>
          </div>
    
        <a
          href="https://www.ea.com/games/apex-legends/compete"           
          className={`${COMPLETE ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${COMPLETE ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>COMPETE</span>
          
          </div>
        </a>
        <a
          href="https://www.ea.com/games/apex-legends/modes/battle-royale"           
          className={`${COMPLETE ? "" : " hidden"} cursor-pointer group`}    
        >
          <div className={`w-[92%] h-[60px]   text-white border-b ${COMPLETE ? "border-rose-600" : "border-white"} border-white m-auto frc justify-between`}>
            <span>Community Guidelines</span>        
          </div>
        </a>

      </div>
    </div>
  );
}

export default Sidebar;

/*
  <div className=" text-[18px]">
              <GoPlus className="text-[18px] transform group-hover:rotate-[180deg]  transition-all  duration-300" />
            </div>
            */