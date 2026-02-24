import type { MainLayoutProps } from "./interface";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cursor } from '@/components/Cursor';

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main style={{ paddingTop: '120px', padding: '120px 60px', minHeight: '80vh' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};