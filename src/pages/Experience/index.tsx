import { SectionTitle } from '@/components/SectionTitle';
import styles from './Experience.module.scss';
import { StatusBadge } from '@/components/StatusBadge';

const experiences = [
  {
    period: "Maio 2025 — Atual",
    role: "Freelancer IT / Estagiário",
    company: "OnVale Contabilidade",
    desc: "Responsável pela manutenção de máquinas, desenvolvimento de sites em WordPress, criação de aplicações em JavaScript e suporte em marketing digital.",
    techs: ["WordPress", "JavaScript", "Manutenção", "Marketing"]
  }
];

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