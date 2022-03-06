import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import logo from './../blackLogo.png'
export default function Registered() {
  const location = useLocation();
    if(!location.state){
       return <Navigate to={"/"}  replace={true}/>
    }

  return (
    <div className="bg-[#f5e8f7] flex flex-col w-screen h-screen items-center">
      <div className="flex gap-8 items-center mt-16" >
        <span className="material-icons text-green-600 text-[3rem]">check_circle</span>
        <span className="text-[1.5rem]" >Registered Successfully</span>
      </div>
      <div className="flex bg-white shadow-xl p-4 mt-6 flex-col border-t-[0.35rem] border-[#82498c] ">
            <span className="text-[1.1rem]" >We will contact you shortly {state.name}. Stay tuned.</span>
            <span className="text-[1.1rem]" >We hope you will enjoy our sessions and have fun.</span>

            <span className="text-[1.1rem] mt-4" >Meanwhile follow us on Instagram for updates.</span>
            <div className="flex mt-2 gap-4 justify-between relative">
                <img className="w-[52px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/240px-Instagram_icon.png" alt="insta" />
                <img className="w-[70px] left-16 -translate-y-[0.3rem] absolute" src={logo} alt="cs logo" />
        
            </div>
      </div>
    </div>
  );
}
