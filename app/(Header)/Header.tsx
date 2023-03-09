"use client";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsQuestionLg } from "react-icons/bs";
import { useState } from "react";
function Header() {
  const [singin, setsingin] = useState<boolean>(false);
  return (
    <div className=" frc w-full h-[40px] bg-[#161616] justify-end ">
      <div className="px-[18px]">
        <BiUser
          onClick={() => setsingin(true)}
          className=" cursor-pointer text-gray-300 hover:text-white text-[24px] "
        />
      </div>
      <div className="px-[18px]">
        <BsQuestionLg className="text-gray-300 text-[18px] hover:text-white cursor-pointer " />
      </div>
      <div className="pl-[18px] pr-[30px]">
        <img src="/EaW.png" className="w-[28px] h-auto cursor-pointer " />
      </div>
    </div>
  );
}

export default Header;
