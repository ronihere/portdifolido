import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import YTCloneImage from '@/public/YTClone.png'
import spotifyImg from '@/public/spotify.png'
import whiteBoardImg from "@/public/white board.png";


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

export const projectsData = [
  {
    title: "Waves",
    liveURL: 'https://spot-music.vercel.app/',
    githubURL:'https://github.com/ronihere/spot-music',
    description:
      "a music player web app built with ReactJS, using Framer Motion for animations and CDN for song delivery. It lets users, play, pause, skip, and shuffle songs from a library of songs, and shows the song details on the screen",
    tags: ["React", "Framer Motion"],
    imageUrl: spotifyImg,
  },
  {
    title: "White Board",
    githubURL: 'https://github.com/ronihere/draw',
    liveURL: 'https://whiteboard-five.vercel.app/',
    description:
      "a whiteboard web application using Next.js and the browser’s native canvas API, enabling users to draw with various colors and save their work.",
    tags: ["NextJS", "Javascript", "Tailwind", "Redux Toolkit", "Canvas API"],
    imageUrl: whiteBoardImg,
  },
  {
    title: "YouTube Clone",
    githubURL: 'https://github.com/ronihere/yt',
    liveURL:'https://yt-clone-ebf6.vercel.app/',
    description:
      "replicates YouTube’s functionality and design, enables users to search, watch, and interact with videos from YouTube, with features such as autocomplete suggestions, playback controls and comments.",
    tags: ["React",  "Tailwind", "Redux Toolkit", "Google APIs"],
    imageUrl: YTCloneImage,
  },
] ;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Builder.io",
  "Java",
  "Git",
  "Tailwind",
  "Redux",
  "Python",
  "Django",
  "Framer Motion",
] as const;