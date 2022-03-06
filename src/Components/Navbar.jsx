import { Button } from "@mantine/core";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row bg-[#121212]  w-full items-center gap-4 sm:justify-between md:px-[6rem] px-[2rem] py-4">
      <span className="text-[1.25rem] md:text-[1.75rem] text-[#e1e1e1] font-mono text-center"><span className="text-[#16e2f3]">from</span> cS<span className="text-[#9333ea]">.events </span><span ><span className="text-[#16e2f3]">import </span>initialize</span>  </span>
      <div>
        <a target="_blank" href="https://www.codingstudio.club/">
          <span className="text-[#e1e1e1] cursor-pointer mr-8 text-[1.1rem]">About Us</span>
        </a>
        <a href="#form">
          <Button
            size="md"
            className="bg-purple-600  hover:bg-purple-800 shadow-md"
          >
            Register
          </Button>
        </a>
      </div>
    </div>
  );
}
