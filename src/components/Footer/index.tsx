import styles from './Footer.module.scss';
import { Logo } from '@/components/Logo';
import { NavLink } from '@/components/NavLink';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo />
          <p>Desenvolvedor focado em soluções robustas e performance.</p>
        </div>

        <div className={styles.links}>
          <div>
            <span>Social</span>
            <NavLink href="https://github.com/jopaul0" target="_blank">GitHub</NavLink>
            <NavLink href="https://linkedin.com/in/joaosantos02" target="_blank">LinkedIn</NavLink>
            <NavLink href="https://instagram.com/jopaul0_" target="_blank">Instagram</NavLink>
          </div>
          <div>
            <span>Navegação</span>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#experiencia">Experiência</NavLink>
            <NavLink href="#projetos">Projetos</NavLink>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} — João Paulo Santos</p>
        <p>São José dos Campos, SP 🇧🇷</p>
      </div>
    </footer>
  );
};