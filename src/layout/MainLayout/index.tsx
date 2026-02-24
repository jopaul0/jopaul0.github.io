import type { MainLayoutProps } from "./interface";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cursor } from '@/components/Cursor';
import { DevToolsShield } from '@/components/DevToolsShield';
import { useDevTools } from '@/hooks/useDevTools';

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isDevToolsOpen = useDevTools();

  if (isDevToolsOpen) {
    return (
      <>
        <DevToolsShield />
      </>
    );
  }

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