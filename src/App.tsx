import { MainLayout } from '@/layout/MainLayout';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/pages/Hero';
import { About } from '@/pages/About';
import { Experience } from '@/pages/Experience';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';
import { Education } from '@/pages/Education';
import { MaintenanceGuard } from '@/components/MaintenanceGuard';

function App() {
  return (
    <>
      <MaintenanceGuard />
      <MainLayout>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </MainLayout>
    </>
  )
}

export default App;