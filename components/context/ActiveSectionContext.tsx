'use client'
import React, { useState, createContext, useContext } from 'react'
import { links } from '@/lib/data'

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}
export type SectionNameType = (typeof links)[number]["name"];

type ActiveSectionContextType = {
    activeSection: SectionNameType;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
    lastTimeHeaderClicked: number;
    setLastTimeHeaderClicked: React.Dispatch<React.SetStateAction<number>>;
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }:ActiveSectionContextProviderProps ) => {
    const [activeSection, setActiveSection] = useState<SectionNameType>("Home");
    const [lastTimeHeaderClicked, setLastTimeHeaderClicked] = useState(0);
  return (
        <ActiveSectionContext.Provider value= {{
        activeSection,
          setActiveSection,
          lastTimeHeaderClicked,
            setLastTimeHeaderClicked,
      }}> {children} </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider;

export const useActiveSectionContext = ()=>{
    const context = useContext(ActiveSectionContext);
    if (context === null) throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
    return context;
}
