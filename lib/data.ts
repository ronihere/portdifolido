import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export type TProject = {
  title: string;
  githubURL: string;
  liveURL: string;
  description: string;
  tags: string[]; // Array of strings
  imageUrl: string;
}
export type TAllData = {
  skills: string[];
  projects : TProject[];
};
export const experiencesData = [
  {
    title: "Graduation",
    location: "University of Calcutta, Kolkata",
    description:
      "I graduated in Bachelor's of Computer Science. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },

  {
    title: "Front-End Developer",
    location: "Mindstix Software Labs, Pune",
    description:
      "I am working as a front-end developer for a year, building and learning new stuffs.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;
const baseUrl = "https://portdifolido.free.beeceptor.com";
export const getAllDynamicData = async (): Promise<TAllData> => {
  const resp = await fetch(`${baseUrl}/allData`);
  return await resp.json();
};

//  [
  // "HTML",
  // "CSS",
  // "JavaScript",
  // "TypeScript",
  // "React",
  // "Next.js",
  // "Builder.io",
  // "Java",
  // "Git",
  // "Tailwind",
  // "Redux",
  // "Python",
  // "Django",
  // "Framer Motion",
// ] as const;
