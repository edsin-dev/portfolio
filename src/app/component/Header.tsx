import React from "react";
import { DM_Sans } from "next/font/google";

type Props = {};

const DM = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Menu = ({ title = "", isActive = false }) => {
  return (
    <div
      className={`sm:mr-14 mt-5 ${DM.className} cursor-pointer ${
        !isActive && "mix-blend-overlay"
      } text-base`}
    >
      {title}
    </div>
  );
};

export default function Header({}: Props) {
  return (
    <nav className={"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row"}>
      <Menu title="Home" isActive={true} />
      <Menu title="About me" />
      <Menu title="Projects" />
      <Menu title="Contact" />
    </nav>
  );
}
