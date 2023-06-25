import { DM_Sans } from "next/font/google";
import Image from "../component/Image";
import React from "react";

type Props = {};

const DM = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

function TechStack({}: Props) {
  const stacks = [
    {
      category: "Frontend",
      images: [
        "/assets/html.png",
        "/assets/css.png",
        "/assets/typescript.png",
        "/assets/reactjs.png",
      ],
      title: ["HTML 5", "CSS 3", "TypeScript", "ReactJs"],
    },
    {
      category: "Backend",
      images: [
        "/assets/java-icon.png",
        "/assets/spring-boot.png",
        "/assets/nodejs.png",
        "/assets/express.png",
      ],
      title: ["Java", "Spring boot", "Spring Security", "Nodejs", "ExpressJs"],
    },
    {
      category: "Mobile App",
      images: [
        "/assets/expo.png",
        "/assets/android-ios.png",
        "/assets/appstore.png",
        "/assets/playstore.png",
      ],
      title: [
        "Expo",
        "React Native CLI",
        "App Store",
        "PlayStore",
        "Android & iOS",
      ],
    },
    {
      category: "Databases",
      images: [
        "/assets/mongo.jpeg",
        "/assets/mysql.png",
        "/assets/postgres.png",
        "/assets/firebase-realtm.png",
      ],
      title: ["Mongo", "MySql", "Postgres", "Firebase Realtime"],
    },
    {
      category: "Deployment",
      images: [
        "/assets/docker.png",
        "/assets/nginx.webp",
        "/assets/cpanel.png",
        "/assets/aws-ec2.png",
      ],
      title: ["Docker", "NGINX", "CPanel", "AWS EC2", "Azure EC2"],
    },
    {
      images: [
        "/assets/redis.png",
        "/assets/openai.png",
        "/assets/firebase.png",
        "/assets/google-map.png",
      ],
      title: ["Redis", "OpenAI API", "Firebase", "Google Map API", "Vision AI"],
    },
  ];
  return (
    <div
      id="tech"
      className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b pb-10 border-b-[#183A58]"
    >
      <div className="max-sm:text-[35px] md:text-3xl md:leading-[65px] py-3">
        Tech Stack
      </div>
      <div
        className={`${DM.className} flex items-center justify-between flex-wrap gap-6`}
      >
        {/* Container */}
        {stacks.map((stack, i) => (
          <div key={i} className="flex md:w-[30%] max-sm:w-[100%]">
            {/* Box */}
            <div className="md:w-52 md:h-52 max-sm:w-52 max-sm:h-52 max-sm:rounded-2xl bg-[#183A58] md:rounded-[45px] flex flex-wrap p-2 justify-center items-center content-center gap-5 ">
              {stack.images.map((logo) => (
                <div
                  key={logo}
                  className="w-16 h-16 flex items-center justify-center bg-white p-3 rounded-xl m-0"
                >
                  <Image src={logo} alt="" className="w-full h-full" />
                </div>
              ))}
            </div>
            {/* Title */}
            <div className={`flex items-center px-2 text-lg`}>
              <ul>
                {stack.title.map((title) => (
                  <li key={title}>{title}</li>
                ))}
              </ul>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
