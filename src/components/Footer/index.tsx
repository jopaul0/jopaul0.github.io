import styles from './Footer.module.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>JO<span>PAULO</span></a>
          <p>Desenvolvedor focado em soluções robustas e performance.</p>
        </div>

        <div className={styles.links}>
          <div>
            <span>Social</span>
            <a href="https://github.com/jopaul0" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/joaosantos02" target="_blank">LinkedIn</a>
            <a href="https://instagram.com/jopaul0_" target="_blank">Instagram</a>
          </div>
          <div>
            <span>Navegação</span>
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
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