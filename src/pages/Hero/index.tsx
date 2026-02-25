import styles from './Hero.module.scss';
import { EmailIcon, GithubIcon, LinkedinIcon } from '@/components/Icons';
import { SimpleButton } from '@/components/SimpleButton';
import { StatusBadge } from '@/components/StatusBadge';
import { SocialLink } from '@/components/SocialLink';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <StatusBadge
          variant="default"
          className={styles.heroLabel}
          label='Disponível para novos projetos'
        />

        <h1 className={styles.heroTitle}>
          Full Stack <br />
          <span className={styles.highlight}>Developer.</span>
        </h1>

        <p className={styles.heroDesc}>
          Transformo ideias em <strong>produtos digitais</strong> de alto impacto.
          Especialista em <strong>Java, React</strong> e arquiteturas modernas.
        </p>

        <div className={styles.heroButtons}>
          <SimpleButton label="Ver Projetos ↓" onClick={() => { }} />
          <SimpleButton outline label="Download CV →" onClick={() => { }} />
        </div>



        <div className={styles.heroStats}>
          <SocialLink href="https://github.com/jopaul0" label="GitHub" label2="@jopaul0" icon={<GithubIcon />} />
          <SocialLink href="https://linkedin.com/in/joaosantos02" label="LinkedIn" label2="João Paulo" icon={<LinkedinIcon />} />
          <SocialLink href="mailto:jopaulo.as8@gmail.com" label="E-mail" label2="Contato" icon={<EmailIcon />} />
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.photoFrame}>
          <div className={styles.cornerDeco}></div>
          <div className={styles.cornerDeco2}></div>
          <div className={styles.photoPlaceholder}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
            <span>João Paulo</span>
          </div>
          <StatusBadge
            variant="filled"
            className={styles.photoTag}
            label="João Paulo"
            noDot
          />
          <StatusBadge
            variant="default"
            className={styles.photoTag2}
          />
        </div>
      </div>
    </section>
  );
};