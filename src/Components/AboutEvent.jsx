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
            <span className="font-mono">();</span>
          </em>
        </span>
        <div className="mt-2">
          <span>
            Initialize is a five-week-long peer learning event that focuses on competitive
            programming, data structures, and algorithms. Over five weeks, you
            will be learning DSA and CP concepts right from the basics and also
            be competing with your peers in weekly contests.
            <br />
            <br />
            The
            coding.Studio(); team will be personally mentoring the participants
            throughout the the event. Learning sessions will take place right
            here at the c.S(); HQ, accompanied by practice sessions and contests
            on Discord. The event will conclude in a final show of skill, a
            Grand Contest, and y'all winners just get bragging rights. Nah, we
            have something special for ya ;)
            <br />
            <br />
            The objective of Initialize is to create a culture of consistent
            competitive programming practice and also to encourage our peers who
            want to kick-start their competitive programming journey.
            <br />
          </span>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Event Span</span> - 17th
            March, 2022 to 23rd April, 2022
          </p>

          <p className="mt-3">
            <span className="font-bold text-[#9333ea]">Event Venue</span> -
            coding.Studio(); HQ, Nalanda Block
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
