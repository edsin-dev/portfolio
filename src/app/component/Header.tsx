import React, { useEffect, useState } from "react";
import { DM_Sans } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

const DM = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Menu = ({ title = "", isActive = false, sectionId = "" }) => {
  return (
    <Link
      href={`#${sectionId}`}
      className={`mr-14 mt-5 ${DM.className} cursor-pointer ${
        !isActive && "mix-blend-overlay"
      } text-base z-20`}
      passHref
    >
      {title}
    </Link>
  );
};

export default function Header({}: Props) {
  return (
    <nav
      className={
        "max-sm:hidden mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-row"
      }
    >
      <Menu title="Home" isActive={true} sectionId="home" />
      <Menu title="About me" sectionId="about_me" />
      <Menu title="Projects" sectionId="projects" />
      <Menu title="Contact" sectionId="contact" />
    </nav>
  );
}
