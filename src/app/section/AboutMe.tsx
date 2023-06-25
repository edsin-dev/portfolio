import { DM_Sans } from "next/font/google";
import Image from "../component/Image";
import React from "react";

type Props = {};

const DM = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

function AboutMe({}: Props) {
  return (
    <div
      id="about_me"
      className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-b pb-10 border-b-[#183A58]"
    >
      <div className="md:text-3xl md:leading-[65px] max-sm:text-[35px] py-3">
        About Me
      </div>
      <div className={`${DM.className} flex items-center`}>
        <div className="flex-grow">
          <p className="py-3 text-lg ">
            Hello there! My name is Edsin, and I am a highly skilled Full Stack
            Developer with 3 years of experience in the industry. I have a
            strong background in backend development, frontend design, and
            database management. My passion lies in creating efficient and
            cutting-edge software solutions that meet the needs of users and
            exceed client expectations.
          </p>
          <p className="py-3 text-lg ">
            I have had the opportunity to work with renowned companies such as
            MJB Technology Solutions Pvt Ltd and Icanio Technology Labs Pvt Ltd,
            where I have contributed to the development of various projects. My
            expertise includes technologies such as ReactJS, React Native, Java,
            Spring, Node.js, MongoDB, and more. I am well-versed in HTML, CSS,
            and JavaScript, allowing me to create visually appealing and
            responsive user interfaces.
          </p>
          <p className="py-3 text-lg ">
            One of my notable projects is the MJB Chatbot GPT and Admin Portal.
            As a Full Stack Developer, I played a pivotal role in developing an
            AI-powered chatbot application that allows users to create
            customized chatbot assistants based on predefined topics, website
            URLs, and file uploads. I utilized ReactJS, React Native, Node.js,
            and MongoDB to create a seamless user experience. Additionally, I
            integrated OpenAI GPT to enhance the chatbot&apos;s intelligence and
            conversational capabilities.
          </p>
          <p className="py-3 text-lg ">
            In another project, the CheckSammy Mobile App, I contributed as a
            Mobile App Developer. The app aimed to streamline the collection of
            used/waste materials by providing a user-friendly interface and
            efficient features. Leveraging my expertise in React Native, I built
            a cross-platform mobile application that allowed drivers to
            efficiently collect materials. I integrated the Google Vision API to
            identify and categorize different types of waste, optimizing the
            collection process. Additionally, I developed an admin panel using
            ReactJS to facilitate efficient management of jobs, customers, and
            scheduling.
          </p>
        </div>
        <div className="md:max-w-[200px] max-sm:hidden">
          <Image src="/assets/crystal-two.png" alt="" className="max-w-lg" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
