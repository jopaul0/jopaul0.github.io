import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';
import { ThemeToggle } from '@/components/ThemeToggle'; // Importe o novo componente

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <Logo />

      {/* Menu Hambúrguer (Mobile) */}
      <button
        className={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={styles.navLinks}>
        <li><NavLink href="#sobre">SOBRE</NavLink></li>
        <li><NavLink href="#experiencia">EXPERIÊNCIA</NavLink></li>
        <li><NavLink href="#projetos">PROJETOS</NavLink></li>
        <li><NavLink href="#contato">CONTATO</NavLink></li>
        <li className={styles.themeItemMobile}>
          <ThemeToggle />
        </li>
      </ul>

    </nav>
  );
};