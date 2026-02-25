import { MainLayout } from '@/layout/MainLayout';
import { Hero } from '@/pages/Hero';
import { Marquee } from '@/components/Marquee';
import { About } from '@/pages/About';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Marquee />
      <About />
    </MainLayout>
  )
}

export default App;