'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion';
import useSectionInView from './Hooks/useSectionInview';
const About = () => {
    const { ref } = useSectionInView("About", 0.99);
  return (
      <motion.section id="about" className='scroll-mt-28 max-w-[45rem] text-center mb-28 leading-8 sm:mb-40' ref={ref} initial={{ opacity:0, y:100 }} animate={{opacity:1 , y:0}} transition={{delay:0.175}}>
          <SectionHeading>About me</SectionHeading>
          <p>
              After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Django , Java & Python
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
          </p>
          <p>
               <span className="italic">When I'm not coding</span>, I enjoy playing Football , watching Football , playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
          </p>
    </motion.section>
  )
}

export default About
