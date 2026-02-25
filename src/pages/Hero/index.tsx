import styles from './Hero.module.scss';
import { SimpleButton } from '@/components/SimpleButton';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLabel}>Disponível para novos projetos</div>
        
        <h1 className={styles.heroTitle}>
          Full Stack <br />
          <span className={styles.highlight}>Developer.</span>
        </h1>

        <p className={styles.heroDesc}>
          Transformo ideias em <strong>produtos digitais</strong> de alto impacto. 
          Especialista em <strong>Java, React</strong> e arquiteturas modernas — do design ao deploy.
        </p>

        <div className={styles.heroButtons}>
          <SimpleButton label="Ver Projetos ↓" onClick={() => {}} />
          <a href="#" className={styles.btnGhost}>Download CV →</a>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>18<span>y</span></div>
            <div className={styles.statLabel}>Idade</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>3º<span>sem</span></div>
            <div className={styles.statLabel}>ADS FATEC</div>
          </div>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.photoFrame}>
          <div className={styles.cornerDeco}></div>
          <div className={styles.cornerDeco2}></div>
          <div className={styles.photoPlaceholder}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            <span>João Paulo</span>
          </div>
          <div className={styles.photoTag}>João Paulo</div>
          <div className={styles.photoTag2}>
            <span className={styles.statusDot}></span>
            Open to work
          </div>
        </div>
      </div>
    </section>
  );
};