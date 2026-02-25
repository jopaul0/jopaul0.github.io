import { MainLayout } from '@/layout/MainLayout';
import { Hero } from '@/pages/Hero';
import { Marquee } from '@/components/Marquee';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Marquee />
    </MainLayout>
  )
}

export default App;