import { MainLayout } from '@/layout/MainLayout';
import { Marquee } from '@/components/Marquee';
import { Hero } from '@/pages/Hero';
import { About } from '@/pages/About';
import { Experience } from '@/pages/Experience';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Marquee />
      <About />
      <Experience />
    </MainLayout>
  )
}

export default App;