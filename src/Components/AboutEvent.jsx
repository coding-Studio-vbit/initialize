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
            <span className="text-[#9333ea] font-mono">codeCraft</span>
            {/* <span className="font-mono">();</span> */}
          </em>
        </span>
        <div className="mt-2">
          <span>
            coding.Studio(); is here to present you with an opportunity to learn and compete with the programmers out there!
            <br />
            <br />
            <span className="font-bold text-[#9333ea]">codeCraft 4.0</span> is finally here!
            <br />
            With challenges designed to test your problem-solving and
            algorithmic skills, this is the ideal opportunity for you to
            showcase your talents and enthusiasm for competitive programming.
            Even as a beginner or a 3-star programmer, you will have something
            to ponder and solve!
            <br />
            <br/>
            This fun-filled, competitive, and educative two-day event, commences with a mock contest followed by an exhilarating grand contest. Register yourselves and participate to win exciting goodies!
            <br />
          </span>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Event Span</span> - 22nd and 23rd February 2023
            <br/>
            Day 1: Introduction to Competitive programming followed by Mock contest<br/>
Day 2: Main contest - codeCraft 4.0
          </p>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Team Size</span> - 1 to 2 members per team.
          </p>
          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Registration Fee </span> - Your love for Problem Solving :)
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
