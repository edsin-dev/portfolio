import { DM_Sans } from "next/font/google";
import Image from "../component/Image";
import React from "react";

type Props = {};

const DM = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function Home({}: Props) {
  const techs = [
    "Front-end Development",
    "Back-end Development",
    "Mobile App Development",
    "Database Management",
  ];
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row border-b pb-20 border-b-[#183A58]">
      <div className="justify-between">
        <div
          className={`text-10xl leading-20 mix-blend-overlay relative left-[-45px] z-[-1] ${DM.className}`}
        >
          HI
        </div>
        <div className={`text-3xl ${DM.className}`}>
          My name is Edsin,
          <br />I am a full stack developer
        </div>
        <ul className="flex mt-6">
          {techs.map((tech) => (
            <li
              className="mr-4 border-b-4 border-b-[#F6683C] max-w-min"
              key={tech}
            >
              <div className="mix-blend-overlay text-base leading-[21px] py-1">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0 backdrop-filter backdrop-blur"></div>
        <Image
          src="/assets/crystal-one.png"
          alt=""
          className="z-[1] scale-[1.9] relative"
        />
      </div>
    </div>
  );
}
