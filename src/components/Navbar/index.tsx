import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        JO<span>PAULO</span>
      </a>

      <ul className={styles.navLinks}>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#experiencia">Experiência</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <a href="#contato" className={styles.navCta}>
        Vamos conversar →
      </a>
    </nav>
  );
};