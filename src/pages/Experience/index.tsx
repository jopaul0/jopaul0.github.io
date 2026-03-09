import { SectionTitle } from '@/components/SectionTitle';
import styles from './Experience.module.scss';
import { StatusBadge } from '@/components/StatusBadge';
import experiences from '@/data/experiences.json';
import { Section } from '@/components/Section';

export const Experience = () => {
  return (
    <Section id="experiencia" sectionClassName={styles.experience} noGlow>
      <div className={styles.sectionHeader}>
        <SectionTitle number="03 — Experiência" title={<>Onde <em>trabalhei</em></>} />
      </div>

      <div className={styles.expList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.expItem}>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.content}>
              <div className={styles.role}>{exp.role}</div>
              <span className={styles.company}>{exp.company}</span>
              <p className={styles.desc}>{exp.desc}</p>
              <div className={styles.techs}>
                {exp.techs.map(tech => (
                  <StatusBadge key={tech} label={tech} variant="default" noDot interactive />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};