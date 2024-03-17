'use client'
import React from 'react'
import Image from 'next/image'
import { motion, spring } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare, FaLink } from 'react-icons/fa'
import useSectionInView from './Hooks/useSectionInview'
import { useActiveSectionContext } from './context/ActiveSectionContext'

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.1);
  const { activeSection , setActiveSection , lastTimeHeaderClicked , setLastTimeHeaderClicked } = useActiveSectionContext();
  return (
    <section ref={ref} className='mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id="home">
          <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration:0.2,
          }}>
            <Image 
              alt='My Image'
              src="https://avatars.githubusercontent.com/u/74338794?v=4"
              height="192"
                      width="192"
              quality="95"
            priority={true}
            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
          />
          </motion.div>
          <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration:0.8
            }} className='text-4xl absolute bottom-0 right-0'>
            👋
          </motion.span>
              </div>
      </div>

      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{y:100, opacity:0}} animate={{opacity:1 , y:0}}>
         <span className="font-bold">Hello, I'm Roni.</span> I'm a{" "}
        <span className="font-bold">Frontend developer.</span>{" "}
        I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>


      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-lg font-medium px-4' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.1}}
      >
        <Link href="#contact" className='group bg-gray-900 cursor-pointer text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition' onClick={() => {
          setActiveSection('Contact')
          setLastTimeHeaderClicked(Date.now())
        }}>
          Contact me here <BsArrowRight className='group-hover:translate-x-2 transition opacity-70'/>
        </Link>


        <a className='group bg-white cursor-pointer text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition borderBlack' href="/CV.pdf" download={true}>Download CV <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/>{" "}</a>
        
        
        <a className='bg-white text-gray-700 p-4 flex text-[1.35rem] items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15]  active:scale-[1.15] transition borderBlack hover:text-gray-950' href='https://www.linkedin.com/in/roni-mondal/' target='_blank'><BsLinkedin className='' /></a>

        
        
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] transition  hover:text-gray-950  borderBlack' href='https://github.com/ronihere' target='_blank'><FaGithubSquare /></a>
        <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-[1.15] transition  hover:text-gray-950  borderBlack' href='https://linktr.ee/ronihere?utm_source=linktree_profile_share&ltsid=08ec34da-db3d-467c-83a3-c8c339cf6ce0' target='_blank'><FaLink /></a>


      </motion.div>
    </section>

  )
}

export default Intro
