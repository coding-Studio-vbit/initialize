import { Blockquote } from "@mantine/core";
import React from "react";
export default function AboutEvent() {
  return (
    <div className="relative shadow-xl min-h-[55rem] md:min-h-[42rem] md:w-[95%]  lg:w-[90%] xl:w-[65%]  w-[90%] mx-auto md:ml-auto md:mr-0   bg-[#1e1e1e]  p-8">
      <span className="text-[2.2rem]">
        About{" "}
        <em>
          <span className="text-[#9333ea] font-mono">initialize</span>
          <span className="font-mono">();</span>
        </em>
      </span>
      <div className="mt-2">
        <span>
          Initialize is a 5-week long event focused on competitive programming,
          data structures, and algorithms. Over five weeks, you will be learning
          DSA and CP concepts right from the basics and also be competing with
          your peers in weekly contests. The event will conclude in a final show
          of skill, a Grand Contest, and y'all winners just get bragging rights.
          Nah, we have something special for ya ;)
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

        <p className="mt-3">
          Feel free to reach out to us at:{" "}
          <p className="text-[#9333ea]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=executives@codingstudio.club"
              target="_blank"
            >
              executives@codingstudio.club
            </a>
          </p>
        </p>

        <Blockquote
          className="mt-16 absolute bottom-6 left-5"
          cite="– coding.Studio();"
        >
          Sleep is a scam.
        </Blockquote>
        <span
          className="text-[2rem] md:text-[4rem] absolute bottom-5 right-[4rem] md:right-[8rem] font-bold "
          // src={logo}

          // alt="logo"
        >
          c.{" "}
          <span className="text-[#6b21a8] absolute   font-bold p-0 m-0">
            S();
          </span>{" "}
        </span>
      </div>
    </div>
  );
}
