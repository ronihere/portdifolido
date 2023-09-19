import { useEffect } from "react";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import type {SectionNameType} from "@/components/context/ActiveSectionContext"
export default function useSectionInView(sectionName : SectionNameType, threshold = 0.6) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { activeSection, setActiveSection, lastTimeHeaderClicked , setLastTimeHeaderClicked } = useActiveSectionContext();
    useEffect(() => {
        console.log('lastTimeHeaderClicked', lastTimeHeaderClicked);
        if (inView &&  Date.now() - lastTimeHeaderClicked > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection]);

    return {
        ref,
    }
}