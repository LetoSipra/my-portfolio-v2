"use client";
import { ProjectsData } from "@/data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

function Projects() {
  const [isSeen, setIsSeen] = useState<boolean>(false);

  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("showAnm", entry.isIntersecting);
          if (entry.isIntersecting) {
            setIsSeen(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    projects.forEach((project: any) => {
      if (isSeen) return;
      observer.observe(project);
    });
  });
  return (
    <div
      className="flex w-full h-fit flex-col space-y-10 px-5 sm:px-0 my-40 sm:my-0"
      id="project"
    >
      <h1
        className="w-fit self-center rounded-lg border-b border-red-500 bg-gradient-to-r from-red-500 to-cyan-200
       bg-clip-text pb-3 text-3xl font-semibold tracking-wide text-transparent sm:mx-10 md:mx-14 md:text-5xl"
      >
        Projects
      </h1>
      {ProjectsData.map((project) => (
        <div
          key={project.slug}
          className="mx-auto mt-[136px] max-w-sm opacity-0 blur-xl filter transition duration-300 project translate-y-52
        items-center space-y-7 rounded-3xl border border-b
         border-black bg-black/25 px-2 py-5 font-mono tracking-wide text-gray-200 
          hover:border-b-red-500/75 sm:max-w-md md:max-w-lg 
         lg:flex lg:max-w-5xl lg:space-x-2 lg:p-5 xl:mx-14 xl:p-10 xl:odd:flex-row-reverse xl:odd:self-end xl:even:self-start
      "
        >
          <div className="w-full">
            <Image
              src={project.cover.url}
              className="h-full w-full rounded-xl object-contain"
              alt={project.desc}
              width={600}
              height={600}
            />
          </div>
          <div className="space-y-5 px-2 lg:max-w-sm">
            <h4 className="m-0 space-x-0 space-y-0 p-0 text-xs">
              {project.type}
            </h4>
            <h1 className="text-3xl text-red-500 md:text-4xl">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl">{project.desc}</p>
            <p className="pt-5 text-sm text-red-500">{project.tech}</p>
            <div className="mx-5 flex items-center justify-end space-x-5">
              {project.website ? (
                <Link href={project.website} target="_blank">
                  <HiExternalLink className="h-10 w-10 cursor-pointer rounded-md text-white transition duration-200 hover:bg-white/5 hover:text-red-500" />
                </Link>
              ) : null}
              <Link href={project.github} target="_blank">
                <FaGithub className="h-10 w-10 cursor-pointer rounded-md p-1 text-white transition duration-200 hover:bg-white/5 hover:text-red-500" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
