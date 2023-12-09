"use client"
import React from 'react';
import { motion } from "framer-motion";
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';

import { useActiveSectionContext } from './context/ActiveSectionContext';
const Header = () => {
    const { activeSection, setActiveSection, lastTimeHeaderClicked , setLastTimeHeaderClicked } = useActiveSectionContext();
    return (
        <header className='z-[999] relative'>
            <motion.div className='hidden sm:block fixed left-1/2  h-[4.5rem] w-full  rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full' initial={{ y: -100, x: "-50%", opacity: 0 }} animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] hm:h-[initial] sm:py-0'>

                <ul className='flex sm:md-[22rem] flex-wrap  items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 bg-black-10 h-auto rounded-lg w-90vw sm:bg-none'>

                    {links.map(link =>
                        <motion.li key={link.hash}
                            className='relative h-3/4 flex items-center justify-center' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>

                            <Link className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition', {
                                "text-gray-950": activeSection === link.name
                            })} href={link.hash} onClick={() => {
                                setActiveSection(link.name);
                                setLastTimeHeaderClicked(Date.now());
                            }} >{link.name}
                                {
                                    activeSection === link.name &&
                                    <motion.span layoutId='activeSection' transition={{
                                            type: 'spring',
                                            damping: 30,
                                            stiffness: 380,
                                    }} className='absolute rounded-full bg-gray-100 -z-10 inset-0'>
                                    </motion.span>
                                }
                            </Link>
                        </motion.li>)}
                </ul>
            </nav>
        </header>
    )
}

export default Header;
