"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import useSectionInView from "./Hooks/useSectionInview";
import {  TProject } from "@/lib/data";


export default function MyProjects({projectList}:{projectList : TProject[]}) {
    
const { ref } = useSectionInView("Projects", 0.6);
console.log(projectList);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectList.map((project, index) => (
          <a href={project.liveURL ? project.liveURL : project.githubURL} target="_blank" key={index}>
            <Project {...project} />
          </a>
        ))}
      </div>
    </section>
  );
}
