import { Blockquote } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutEvent() {
  return (
    <div className="flex flex-col justify-between relative shadow-xl  md:w-[95%]  lg:w-[90%] xl:w-[65%]  w-[90%] mx-auto md:ml-auto md:mr-0   bg-[#1e1e1e]  p-8">
      <div>
        <span className="text-[2.2rem]">
          About{" "}
          <em>
            <span className="text-[#9333ea] font-mono">cS(); Saturdays</span>
            {/* <span className="font-mono">();</span> */}
          </em>
        </span>
        <div className="mt-2">
          <span>
            coding.Studio() is here to provide you with an opportunity to enhance your problem-solving skills
             and strengthen your logical building abilities, enabling you to compete with top programmers.
            <br />
            <br />
            <span className="font-bold text-[#9333ea]">cS(); Saturdays</span> is finally here!
            <br />
            With sessions designed to sharpen your problem-solving and logical building skills, this is
             the perfect opportunity for you to engage in hands-on practice every Saturday.
            Whether you're just starting out or already have some experience, it will
             help you grow and refine your abilities in competitive programming.
            <br />
          </span>
          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Event Mode</span> - Online
            <br/>
          </p>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Event Span</span> - 16th November to 07th December Every Saturday
            <br/>
          </p>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Timing</span> - 7:00 PM to 8:30 PM
            <br/>
          </p>

          {/* <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Team Size</span> - 1 to 2 members per team.
          </p> */}
          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Registration Fee </span> - Your interest in Learning :)
          </p>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Event Venue</span> -
            Vignana Bharathi Institute of Technology, Ghatkesar
          </p>
          <p className="overflow-wrap mt-3">
            Feel free to reach out to us at{" "}
            <a
              className=" underline"
              href={"mailto:executives@codingstudio.club"}
              target="_blank"
            >
              executives@codingstudio.club
            </a>
          </p>
        </div>
        <div className="flex items-center mt-4 justify-between">
          <Blockquote className="" cite="– coding.Studio();">
            Sleep is a scam.
          </Blockquote>
          <span className="text-[2rem] md:text-[4rem]  font-bold ">
            c.<span className="text-[#6b21a8]  font-bold ">S();</span>
          </span>
        </div>
      </div>
    </div>
  );
}
