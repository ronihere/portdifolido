'use client'
import React from 'react'
import { skillsData } from '@/lib/data'
import SectionHeading from './SectionHeading'
import useSectionInView from './Hooks/useSectionInview'
import { inView, motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
const fadeInAnimation = {
    initial: {
        y: 20,
        opacity : 0
    },
    animate: (index: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay : index * .05,
        },
    }),
}

const Skills = () => {
    const [ ref1, inView1 ] = useInView();
    const { ref } = useSectionInView('Skills', 0.9);
  return (
      <div ref={ref} id='skills' className='mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40'>
          <SectionHeading>My Skills</SectionHeading>
          <ul className='flex gap-2 flex-wrap text-gray-800 justify-center text-lg'>
              {
                  skillsData.map((skill , index) =>
                      <motion.li variants={fadeInAnimation} ref={ref1} initial="initial" animate={inView1 ? "animate" : "initial"} custom={index} className='bg-white border border-black/[0.1] rounded-xl px-5 py-3' key={skill}>
                          {skill}
                      </motion.li>
                  )
              }
          </ul>

    </div>
  )
}

export default Skills;
