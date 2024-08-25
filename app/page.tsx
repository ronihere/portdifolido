import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contactme from "@/components/Contactme";
import { getAllDynamicData} from "@/lib/data";
export default async function Home() {
  const [dynamicData] = await Promise.allSettled([
    getAllDynamicData(),
  ]);
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <SectionDivider />
      <About />
      <MyProjects
        projectList={dynamicData.status === "fulfilled" ? dynamicData.value.projects : []}
      />
      <Skills skills={dynamicData.status === "fulfilled" ? dynamicData.value.skills : []} />
      <Experience />
      <Contactme />
    </main>
  );
}
