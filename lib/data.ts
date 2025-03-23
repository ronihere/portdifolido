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
  wip: boolean
}
export type TAllData = {
  skills: string[];
  projects : TProject[];
};
export const cvUrl = "https://drive.google.com/file/d/1U3tqNNe_KHWI4oQnxWpN1Esy1EL8kH_C/view?usp=sharing"
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
    title: "Full stack Developer",
    location: "Mindstix Software Labs, Pune",
    description:
      "I am working as a full-stack developer here in mindstix, building and learning new stuffs everyday.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;
const baseUrl = "https://portdifolido.free.beeceptor.com";


export const ProjectAndSkillResponse = {skills:[  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Nodejs",
  "Expressjs",
  "Nestjs",
  "Prisma",
  "Next.js",
  "Builder.io",
  "Java",
  "Git",
  "Tailwind",
  "Redux",
  "Python",
  "Django",
  "Framer Motion"],
"projects":[
{title:"Bugbook",
    liveURL: "https://nextjs-social-eosin.vercel.app/",
githubURL:"https://github.com/ronihere/nextjs-social",
description:"A social media application levaraging features such as creating new Post , follow friends ...",
tags:["Nextjs","Shadcn","Tanstack Query"],
imageUrl:"https://i.ibb.co/7KfWw9f/buglight.png"
,
wip:true
},
{title: "Waves",
    liveURL: "https://spot-music.vercel.app/",
    githubURL:"https://github.com/ronihere/spot-music",
    description:
      "a music player web app built with ReactJS, using Framer Motion for animations and CDN for song delivery. It lets users, play, pause, skip, and shuffle songs from a library of songs, and shows the song details on the screen",
    tags: ["React", "Framer Motion"],
    imageUrl: "https://i.ibb.co/sHYm3zs/spotify.png",
wip:false
  },
  {
    title: "Image Gallery - Editor",
    liveURL: "https://img-lib-dpyl.vercel.app/",
    githubURL:"https://github.com/ronihere/img-lib",
    description:
      "Users can upload images from various sources(Unsplash, DropBox, Google Drive). Offers features like google auto-tagging and AI-driven editing, background removal.",
    tags: ["Nextjs", "ShadCN", "Tailwind", "Cloudinary"],
    imageUrl: "https://i.ibb.co/X8QPB88/ImgLib.png",
wip:false
  },
  {
    title: "White Board",
    githubURL: "https://github.com/ronihere/draw",
    liveURL: "https://whiteboard-five.vercel.app/",
    description:
      "a whiteboard web application using Next.js and the browser’s native canvas API, enabling users to draw with various colors and save their work.",
    tags: ["NextJS", "Javascript", "Tailwind", "Redux Toolkit", "Canvas API"],
    imageUrl: "https://i.ibb.co/6BpdrDs/white-board.png",
wip:false
  },
  {
    title: "YouTube Clone",
    githubURL: "https://github.com/ronihere/yt",
    liveURL:"https://yt-clone-ebf6-qnlzomcwe-roni-s-team.vercel.app/",
    description:
      "replicates YouTube’s functionality and design, enables users to search, watch, and interact with videos from YouTube, with features such as autocomplete suggestions, playback controls and comments.",
    tags: ["React",  "Tailwind", "Redux Toolkit", "Google APIs"],
    imageUrl: "https://i.ibb.co/L8QqFxm/YTClone.png",
wip:false
  },
{
    title: "Realtor here",
    githubURL: "https://github.com/ronihere/jugyah03",
    liveURL:"hhttps://jugyah-r03-roni-mondal.vercel.app/",
    description:
      "A Realtor application where you can upload details of a property and buy as well",
    tags: ["Next",  "Tailwind", "zod", "ShadCN"],
    imageUrl: "https://i.ibb.co/CnntS7S/Screenshot-2024-10-26-at-6-59-38-PM.png",
    wip:true
  }
]
}
