import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { Logo } from '@/components/Logo';
import { SimpleButton } from '@/components/SimpleButton';
import { NavLink } from '@/components/NavLink';

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

      {/* Botão Hambúrguer - Só aparece no Mobile */}
      <button 
        className={styles.hamburger} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <ul className={styles.navLinks}>
        <li><NavLink href="#sobre">SOBRE</NavLink></li>
        <li><NavLink href="#experiencia">EXPERIÊNCIA</NavLink></li>
        <li><NavLink href="#projetos">PROJETOS</NavLink></li>
        <li><NavLink href="#contato">CONTATO</NavLink></li>
      </ul>


      <SimpleButton outline label="Vamos conversar →" className={styles.navCta}/>
    </nav>
  );
};