import type { MainLayoutProps } from "./interface";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DevToolsShield } from '@/components/DevToolsShield';
import { useDevTools } from '@/hooks/useDevTools';

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isDevToolsOpen = useDevTools();

  if (isDevToolsOpen) {
    return (
      <>
        <DevToolsShield isOpen={true} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};