import { DM_Sans } from "next/font/google";
import Image from "../component/Image";
import React from "react";
import { getImage } from "@/constants/config";

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
    <div
      id="home"
      className="md:mx-auto md:max-w-7xl md:px-2 sm:px-6 lg:px-8 md:flex md:flex-row border-b md:pb-20 border-b-[#183A58] max-sm:max-h-96"
    >
      <div className="justify-between">
        <div
          className={`md:text-10xl  md:leading-20 max-sm:leading-[9rem] max-sm:text-[160px] mix-blend-overlay relative md:left-[-45px] z-[-1] ${DM.className}`}
        >
          HI
        </div>
        <div
          className={`md:text-3xl max-sm:text[24px] max-sm:pl-2  ${DM.className}`}
        >
          My name is Edsin,
          <br />I am a full stack developer
        </div>
        <ul className="md:flex mt-6 max-sm:pl-2">
          {techs.map((tech) => (
            <li
              className="md:mr-4 md:border-b-4 md:border-b-[#F6683C] md:max-w-min max-sm:border-l-4 max-sm:border-l-[#F6683C] max-sm:mt-2 max-sm:pl-2"
              key={tech}
            >
              <div className="mix-blend-overlay text-base leading-[21px] py-1">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex-1 relative max-sm:top-[-23rem] max-sm:right-[-14rem] max-sm:h-96 max-sm:w-80">
        <div className="absolute inset-0 backdrop-filter backdrop-blur"></div>
        <Image
          src={getImage("crystal-one-min.webp")}
          alt=""
          className="z-[1] scale-[1.9] relative"
        />
      </div>
    </div>
  );
}
