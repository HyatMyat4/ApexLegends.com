import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsTwitch,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import { JOINTHECONVERSION } from "../../constants";
function Session8() {
  return (
    <div className="w-full h-[500px] bg-[#252525]">
      <div className="w-[98%] 1400:w-[1300px] h-full m-auto fcc ">
        <div id="monospace" className="w-full h-[38%] fcc  1225:frc">
          <div className="w-full 1225:w-[65%] h-[40%]  1225:h-full  frc  justify-between  flex-wrap  ">
            {JOINTHECONVERSION.map((data) => (
              <div className="w-auto h-auto mr-[10px]">
                 <a key={data.name} href={data.href} className=" text-slate-300 hover:text-red-500 cursor-pointer  text-[18px]">
                  {data.name}
                 </a>
              </div>
            ))}
          </div>
          <div className="w-full 1225:w-[35%] h-[60%]  1225:h-full  fcc items-center 1225:items-end justify-center ">
            <span className=" font-bold text-slate-200 text-[20px] tracking-tighter">
              JOIN THE CONVERSATION
            </span>
            <div className="w-[70%] frc justify-between  text-[#FFFFFF] mt-[20px] text-[25px]">
              <a  href="https://twitter.com/PlayApex">
                 <BsTwitter className=" cursor-pointer hover:scale-125 transition-all duration-75 " />
              </a>
              <a href="https://www.instagram.com/playapex/">
              <BsInstagram className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
              </a>
              <a href="https://www.twitch.tv/playapex">
              <BsTwitch className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
              </a>
              <a href="https://www.facebook.com/playapex">
              <BsFacebook className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
              </a>
              <a href="https://www.youtube.com/playapex">
              <BsYoutube className=" cursor-pointer hover:scale-125  transition-all duration-75 " />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#595959]"></div>
        <div className="w-full h-[62%]  fcc 1225:frc">
          <div className=" w-full 1225:w-[65%] h-full  frc  justify-between flex-wrap">
            <a href="https://www.ea.com/games/apex-legends">
              <img
                src="/apex-copyright-sigil-white.png"
                className=" w-[60px]  400:w-[70px] 1090:w-auto"
              /> 
              </a>
              <a href="https://www.ea.com/games/apex-legends/compete">
              <img
                src="/apex-global-series-footer-logo.svg"
                className=" w-[120px] 400:w-[150px]  1090:w-[200px]"
              /> 
              </a>
              <a href="https://www.ea.com/games/apex-legends/apex-legends-mobile">
                 <img
                src="/apex-mobile-footer-logo.svg"
                className=" w-[80px] 400:w-[100px] 1090:w-[120px]"
              /> 
              </a>
              <a href="http://www.respawn.com/">
                 <img 
                src="/apex-respawn-white-logo.png"
                className="w-[130px] 400:w-[150px] 1090:w-[200px] "
              /> 
              </a>
          </div>
          <div className="w-[95%] 400:w-[35%] h-full  fcc items-center 400:items-end justify-center ">
            <a href="http://www.esrb.org/">
              <img
                src="/apex-esrb-rating-t-interactive-june-2021.svg"
                
              /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session8;
