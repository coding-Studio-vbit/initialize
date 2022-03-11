import React from "react";

export default function Done() {
  return (
    <div className="flex w-screen h-screen px-4 flex-col items-center relative ">
      <span className="text-white mt-16 text-center text-[3rem]">
        Registration closed
      </span>
      <span className="text-white mt-2 text-[1.1rem]">
        Oops! You are late!!
      </span>

      <span className="text-white bottom-0 text-[4rem] absolute  font-bold ">
        c.<span className="text-[#6b21a8]  font-bold ">S();</span>
      </span>
    </div>
  );
}
