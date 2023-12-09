import Intro from '@/components/Intro'
import SectionDivider from '@/components/SectionDivider'
import About from '@/components/About'
import MyProjects from '@/components/MyProjects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contactme from '@/components/Contactme'
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Intro />
      <SectionDivider />
      <About />
      <MyProjects />
      <Skills />
      <Experience />
      <Contactme/>
    </main>
  )
}
