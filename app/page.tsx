import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contactme from "@/components/Contactme";
import {ProjectAndSkillResponse} from '@/lib/data'
export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <SectionDivider />
      <About />
      <MyProjects
        projectList={ProjectAndSkillResponse.projects}
      />
      <Skills skills={ProjectAndSkillResponse.skills} />
      <Experience />
      <Contactme />
    </main>
  );
}
