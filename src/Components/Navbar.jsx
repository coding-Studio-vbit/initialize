import { Button } from "@mantine/core";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row  w-full items-center gap-4 sm:justify-between px-[4rem] py-4">
      <span className="text-[1.75rem]">codingStudio(); | Initialize</span>
      <div>
        <a target="_blank" href="https://www.codingstudio.club/">
          <span className=" cursor-pointer mr-8 text-[1.1rem]">About Us</span>
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
