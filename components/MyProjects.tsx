"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import useSectionInView from "./Hooks/useSectionInview";


export default function MyProjects() {
    
const { ref } = useSectionInView("Projects", 0.6);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <a href={project.liveURL ? project.liveURL : project.githubURL} target="_blank" key={index}>
            <Project {...project} />
          </a>
        ))}
      </div>
    </section>
  );
}
