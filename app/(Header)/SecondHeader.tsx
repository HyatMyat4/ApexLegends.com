import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { ABOUT, SOCAL, FREEDOWLOAD } from "../../constants";
import Link from "next/link";
function SecondHeader() {
  return (
    <div
      id="monospace"
      className="w-full h-[61px] sticky top-0 bg-black frc justify-between z-[200] "
    >
      <div className="w-auto 1090:w-[750px] 1400:w-[900px]   h-full  frc  justify-between ">
        <div className="mx-0  1090:mx-[25px] 1400:mx-[43px] frc select-none">
          <div className="mr-[15px] ml-[20px] flex 1090:hidden">
            <HiOutlineBars3 className="text-white text-[40px] cursor-pointer"/>
          </div>
          <Link href={"/"}>
          <img src="/ApexTextlogo.svg" className="min-w-[55px]" />
          </Link>
        </div>
        <div className="text-white hover:text-red-500 relative cursor-pointer  group hidden 1090:flex   ">
          <div className=" text-[15px] 1400:text-[18px] frc justify-center">
            <span className="">ABOUT</span>
            <BsChevronDown className="ml-[6px]    transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
          </div>
          <div className=" hidden  group-hover:inline w-[260px] text-white  h-[450px] absolute bottom-[-450px] left-[-35px] z-[100] ">
            <div
              className="bg-black w-[100%] h-[95%] mt-[24px] rounded  overflow-hidden
                  opacity-[0.9]    group-hover:animate-dropdownHight   p-[35px] fcc  items-start "
            >
              <div className="mt-[15px] text-[20px]  animate-slidedown">
                OVERVIEW
              </div>
              <div className="w-full h-[1px]  bg-slate-600 opacity-[0.9] "></div>
              {ABOUT.map((data) => (
                <Link href={data.Link}
                  key={data.name}
                  id="Roboto"
                  className="mt-[15px]  frc text-slate-200  hover:text-red-600   animate-slideright2"
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-white hover:text-red-500 relative cursor-pointer  group hidden 1090:flex  ">
          <div className="text-[15px] 1400:text-[18px] frc justify-center">
            <span>MODES</span>
            <BsChevronDown className="ml-[6px]    transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
          </div>
          <div className=" hidden  group-hover:inline w-[240px] text-white  h-[120px] absolute bottom-[-120px] left-[-35px] z-[100] ">
            <div
              className="bg-black w-[100%] h-[95%] mt-[21px] rounded  overflow-hidden
                  opacity-[0.9]   group-hover:animate-dropdownHight px-[35px]   py-[25px] fcc  items-start "
            >
              <a href="https://www.ea.com/games/apex-legends/modes/team-deathmatch"
                id="Roboto"
                className=" text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Team Deathmatch
              </a>
              <a href="https://www.ea.com/games/apex-legends/modes/battle-royale"
                id="Roboto"
                className="mt-[15px] text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Battle Royale
              </a>
            </div>
          </div>
        </div>
        <div className="text-white hover:text-red-500 cursor-pointer  group hidden 1090:flex   ">
          <div className="text-[15px] 1400:text-[18px] frc justify-center">
            <a href="https://www.ea.com/en-us/games/apex-legends/revelry">SEASON</a>
          </div>
        </div>
        <div className="text-white hover:text-red-500 cursor-pointer  group hidden 1090:flex  ">
          <div className="text-[15px] 1400:text-[18px] frc justify-center">
            <a href="https://www.ea.com/games/apex-legends/battle-pass">BATTLEPASS</a>
          </div>
        </div>
        <div className="text-white hover:text-red-500 relative cursor-pointer  group hidden 1090:flex   ">
          <div className="text-[15px] 1400:text-[18px] frc justify-center">
            <span>NEWS&MEDIA</span>
            <BsChevronDown className="ml-[6px]    transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
          </div>
          <div className=" hidden  group-hover:inline w-[240px] text-white  h-[215px] absolute bottom-[-215px] left-[-35px] z-[100] ">
            <div
              className="bg-black w-[100%] h-[95%] mt-[21px] rounded  overflow-hidden
                  opacity-[0.9]   group-hover:animate-dropdownHight px-[35px]   py-[25px] fcc  items-start "
            >
              <a href="https://www.ea.com/games/apex-legends/news"
                id="Roboto"
                className=" text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Latest News
              </a>
              <a href="https://www.ea.com/games/apex-legends/news#game-updates"
                id="Roboto"
                className="mt-[15px] text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Game Updates
              </a>
              <a href="https://www.ea.com/games/apex-legends/media"
                id="Roboto"
                className="mt-[15px] text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Latest Media
              </a>
              <a href="https://www.ea.com/games/apex-legends/newsletter"
                id="Roboto"
                className="mt-[15px] text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Sign up for News
              </a>
            </div>
          </div>
        </div>        
        <div className="text-white hover:text-red-500 relative cursor-pointer  group hidden 1090:flex   ">
          <div className="text-[15px] 1400:text-[18px] frc justify-center">
            <span>COMMUNTY</span>
            <BsChevronDown className="ml-[6px]    transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
          </div>
          <div className=" hidden  group-hover:inline w-[460px] text-white h-[310px] absolute bottom-[-310px] left-[-35px] z-[100] ">
            <div
              className="bg-black w-[100%] h-[95%] mt-[24px] rounded  overflow-hidden
                  opacity-[0.9]   group-hover:animate-dropdownHight   p-[35px]  frc items-start justify-between  "
            >
              <div className="w-[27%] h-auto fcc  items-start">
                <div className=" text-[20px]  animate-slidedown">SOCIAL</div>
                <div className="w-full h-[1px]  bg-slate-600 opacity-[0.9] "></div>
                {SOCAL.map((data) => (
                  <a href={data.Href}
                    key={data.Name}
                    id="Roboto"
                    className="mt-[15px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
                  >
                    {data.Name}
                  </a>
                ))}
              </div>
              <div className="w-[27%] h-auto fcc  items-start">
                <div className=" text-[20px]  animate-slidedown">COMMUNITY</div>
                <div className="w-full h-[1px]  bg-slate-600 opacity-[0.9] "></div>

                <a href="https://answers.ea.com/t5/Apex-Legends/ct-p/apex-legends-en"
                  id="Roboto"
                  className="mt-[15px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
                >
                  Forums
                </a>
              </div>
              <div className="w-[27%] h-auto fcc  items-start">
                <div className=" text-[20px]  animate-slidedown">COMMUNITY</div>
                <div className="w-full h-[1px]  bg-slate-600 opacity-[0.9] "></div>

                <a href="https://www.ea.com/games/apex-legends/apex-legends-shop"
                  id="Roboto"
                  className="mt-[15px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
                >
                  Apexshop.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="monospace"
          className="text-white hover:text-red-500 relative cursor-pointer  group  "
        >
          <a href="https://www.ea.com/games/apex-legends/compete" className="text-[15px] 1400:text-[18px] frc justify-center hidden 1090:flex  ">
            <span>COMPETE</span>
            <BsChevronDown className="ml-[6px]    transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
          </a>
          <div className=" hidden  group-hover:inline w-[270px] text-white  h-[120px] absolute bottom-[-120px] left-[-35px] z-[100] ">
            <div
              className="bg-black w-[100%] h-[95%] mt-[21px] rounded  overflow-hidden
                  opacity-[0.9]   group-hover:animate-dropdownHight px-[35px]   py-[25px] fcc  items-start "
            >
              <a href="https://www.ea.com/games/apex-legends/community-tournament-guidelines"
                id="Roboto"
                className=" text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Compete
              </a>
              <div
                id="Roboto"
                className="mt-[15px] text-[18px]  frc text-slate-200  hover:text-red-600  animate-slideright2 "
              >
                Community Guidelines
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[290px] h-[78%] hidden 450:flex  bg-[#DA292A] relative mr-[10px] rounded  frc text-white justify-center group cursor-pointer ">
        <span className="text-[20px]">DOWNLOAD FOR FREE* </span>
        <BsChevronDown className="ml-[6px]  text-[18px]   transform group-hover:rotate-[180deg]  transition-all  duration-200   " />
        <div className=" hidden  group-hover:inline w-[290px] text-white  h-[550px] absolute bottom-[-545px] left-0 z-[100] ">
          <div
            className="bg-black w-[100%] h-[95%] mt-[24px] rounded  overflow-hidden
                  opacity-[0.9]   group-hover:animate-dropdownHight   p-[15px] fcc   "
          >
            {FREEDOWLOAD.map((data) => (
              <a
                href={data.href}
                key={data.name}
                className="w-full h-[70px] border-[2px] border-white mt-[15px] frc justify-center text-[17px] hover:scale-105 transition-all duration-75 rounded"
              >
                {data.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondHeader;
