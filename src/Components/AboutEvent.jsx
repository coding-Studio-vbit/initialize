import { Blockquote } from "@mantine/core";
import React from "react";
export default function AboutEvent() {
  return (
    <div className="relative shadow-xl min-h-[30rem] md:w-[95%]  lg:w-[90%] xl:w-[65%]  w-[90%] mx-auto md:ml-auto md:mr-0   bg-[#1e1e1e]  p-8">
      <span className="text-[2.2rem]">About <span className="font-mono">cS.</span><em><span className="text-[#9333ea] font-mono" >initialize</span><span className="font-mono">();</span></em></span>
      <div className="mt-2">
        <span>
        Initialize is a 5-weeks event focused on competitive programming, data structures and algorithms. During the course of five weeks, you will be learning various DSA, and Competitive Programming concepts right from the basics and also be participating in exciting contests every week. The objective of Initialize is to create a culture of consistent competitive programming practice and also encourage peers who want to kick-start their competitive programming journey. Our goal is to give you a taste of the adrenaline rush we get when we solve problems.
       </span>
        <Blockquote className="mt-16 absolute bottom-6 left-5" cite="– cS people">
          Sleep is a SCAM
        </Blockquote>
        <span
          className="text-[2rem] md:text-[4rem] absolute bottom-5 right-[4rem] md:right-[8rem] font-bold "
          // src={logo}
          
          // alt="logo"
        >c. <span className="text-[#6b21a8] absolute   font-bold p-0 m-0" >S();</span> </span>

      </div>
    </div>
  );
}
