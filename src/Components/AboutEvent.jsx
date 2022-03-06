import { Blockquote } from "@mantine/core";
import React from "react";
import logo from "./../blackLogo.png";
export default function AboutEvent() {
  return (
    <div className="relative shadow-xl min-h-[20rem] md:w-[95%]  lg:w-[90%] xl:w-[65%]  w-[90%] mx-auto md:ml-auto md:mr-0   bg-[#1e1e1e]  p-8">
      <span className="text-[2.2rem]">About cs.Init();</span>
      <div className="mt-2">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. This personal finance app's filled text fields have been customized using Material Theming. Areas of customization include color and typography.Voluptatibus,
          fuga harum ab natus veniam blanditiis laborum eveniet maiores atque
          vero? Commodi possimus odio dignissimos eveniet vel rerum? Molestias,
          at eius?
        </span>
        <Blockquote className="mt-16 absolute bottom-6 left-5" cite="– cS people">
          Sleep is a SCAM
        </Blockquote>
        <img
          className=" w-[20%] absolute bottom-5 right-5 "
          src={logo}
          
          alt="logo"
        />

      </div>
    </div>
  );
}
