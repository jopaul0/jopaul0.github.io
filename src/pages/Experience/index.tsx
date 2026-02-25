import { SectionTitle } from '@/components/SectionTitle';
import styles from './Experience.module.scss';
import { StatusBadge } from '@/components/StatusBadge';
import experiences from '@/data/experiences.json';

export const Experience = () => {
  return (
    <section className={styles.experience} id="experiencia">
      <div className={styles.sectionHeader}>
        <SectionTitle number="02 — Experiência" title={<>Onde <em>trabalhei</em></>} />
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
            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>
    </section>
  );
};