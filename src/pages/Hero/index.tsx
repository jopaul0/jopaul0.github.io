import styles from './Hero.module.scss';
import { EmailIcon, GithubIcon, LinkedinIcon } from '@/components/Icons'; // Removemos o UserIcon daqui
import { SimpleButton } from '@/components/SimpleButton';
import { StatusBadge } from '@/components/StatusBadge';
import { SocialLink } from '@/components/SocialLink';
import { Section } from '@/components/Section';

export const Hero = () => {
  return (
    <Section id="hero" containerClassName={styles.hero}>
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
          Desenvolvendo soluções <strong>escaláveis</strong> com foco em arquitetura <strong>Backend</strong>.
          Estudante de ADS dedicado ao domínio da linguagem <strong>Java</strong> e sistemas robustos.
        </p>

        <div className={styles.heroButtons}>
          <SimpleButton label="Ver Projetos ↓" onClick={() => { document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' }) }} />
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
          
          <img 
            src="https://github.com/jopaul0.png" 
            alt="Foto de João Paulo" 
            className={styles.profileImage}
          />

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
    </Section>
  );
};