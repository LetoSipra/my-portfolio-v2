"use client";
import Animate from "@/utility/Animate";
import { HiChevronRight } from "react-icons/hi";

function AboutMe() {
  Animate("about");

  return (
    <div
      id="about"
      className="h-screen flex items-center justify-center opacity-0 blur-xl filter my-40 sm:my-0 transition duration-300 about"
    >
      <div className="space-y-10 mx-3">
        <h1
          className="rounded-lg pb-3 border-b border-red-500 bg-gradient-to-r w-fit mx-5 sm:mx-0
         from-red-500 to-cyan-200 bg-clip-text text-3xl font-semibold sm:tracking-wide text-transparent md:text-5xl"
        >
          About me
        </h1>
        <div className="sm:tracking-wide flex flex-col lg:items-start lg:space-y-10 space-y-5">
          <div className="space-y-10 text-lg sm:tracking-wide lg:max-w-md xl:max-w-3xl mx-5 sm:mx-0">
            <p className="">
              I’m a developer passionate about crafting pixel-perfect user
              interfaces that blend thoughtful design with robust engineering.
              My favorite work lies at the intersection of design and
              development, creating experiences that not only look great but are
              meticulously built for performance and usability.
              <span className="text-red-500">
                {" "}
                I have studied Computer Programming
              </span>{" "}
              (Associate Degree), which has given me a strong foundation in
              problem-solving, software development and crafting seamless
              digital experiences.
            </p>
            <p>
              I am constantly refining my skills and staying up to date with the
              latest web technologies. I’m eager to bring my knowledge and
              creativity to a team where I can grow as a developer and help
              build impactful web experiences.
            </p>
          </div>
          <div className="space-y-5 font-bold group">
            <h1 className="text-red-500 text-xl mx-5 sm:mx-0">My Toolkit :</h1>
            <div className="flex space-x-3 font-mono text-sm rounded-3xl group-hover:border-red-500 lg:border-b-2 lg:border-r-2 border-solid border-red-500/75 pb-8 pr-8">
              <ul className="space-y-5">
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500" />
                  {"Javascript"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Typescript"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Tailwind CSS"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"HTML & CSS"}
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Next.js & React.js"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"React Native"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"GraphQL"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"State Management"}
                </li>
              </ul>
              <ul className="space-y-5">
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Node.js"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Serverless"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Cloud"}
                </li>
                <li className="flex items-center">
                  <HiChevronRight className="h-6 w-6 flex-shrink-0 text-red-500 " />
                  {"Express"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
