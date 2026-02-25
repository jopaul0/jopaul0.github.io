import { MainLayout } from '@/layout/MainLayout';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/pages/Hero';
import { About } from '@/pages/About';
import { Experience } from '@/pages/Experience';
import { Projects } from '@/pages/Projects';
import { Contact } from '@/pages/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  )
}

export default App;