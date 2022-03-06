import React from "react";
import Logo from "./../frlogo.png";
export default function Event() {
  return (
    <div className="grid bg-[#121212] md:grid-cols-2 grid-cols-1 place-content-center w-[75%] gap-[4rem] mx-auto md:mt-16 mt-8">
      <div className="self-center md:justify-self-start justify-self-center w-[70%] h-full 	">
        <img src={Logo} alt="logo" />
      </div>
      <span className="md:text-[3rem] text-[2rem] text-[#e1e1e1] md:text-right text-center self-center">
     
          Initialize your CP career with cs.init();
        
        <span className="mt-4 block text-[1.1rem] md:text-right text-center">
          Registration ends on 13th March 2022, 11:59 PM
        </span>
      </span>
    </div>
  );
}
