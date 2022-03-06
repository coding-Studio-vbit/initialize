import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import logo from './../blackLogo.png'
export default function Registered() {
  const location = useLocation();
    if(!location.state){
       return <Navigate to={"/"}  replace={true}/>
    }

  return (
    <div className="bg-[#121212]  flex flex-col w-screen h-screen items-center">
      <div className="flex gap-8 items-center mt-16" >
        <span className="material-icons text-green-600 text-[3rem]">check_circle</span>
        <span className="text-[1.5rem] text-[#e1e1e1]" >Registered Successfully</span>
      </div>
      <div className="flex bg-[#1e1e1e] px-[2rem] text-[#e1e1e1] shadow-xl p-4 mt-6 flex-col border-t-[0.35rem] border-[#9333ea] ">
            <span className="text-[1.1rem]" >We will contact you shortly <strong>{location.state}</strong>. Stay tuned.</span>
            <span className="text-[1.1rem]" >We hope you are as excited as we are.</span>
            <span className="text-[1.25rem] mt-4" >Have any Queries ?</span>
            <span> Reach us at <strong>executives@codingstudio.club</strong></span>

            <span className="text-[1.1rem] mt-4" >Follow us on Instagram for more updates.</span>
            <div className="flex  mt-2 ">
            <img className="w-[64px] h-[64px] " src="https://img.icons8.com/plasticine/100/000000/instagram-new--v2.png"/>
                <img className="w-[64px] scale-90 mt-1 " src={logo} alt="cs logo" />
                <img className="ml-2 scale-90" src="https://img.icons8.com/doodle/64/000000/youtube-play--v2.png"/>                </div>
      </div>
    </div>
  );
}
