import { SectionTitle } from '@/components/SectionTitle';
import { Section } from '@/components/Section';
import styles from './Education.module.scss';
import educationData from '@/data/education.json';

export const Education = () => {
    return (
        <Section id="formacao" sectionClassName={styles.educationSection} noGlow>
            <SectionTitle number="02 — FORMAÇÃO" title={<>O que <em>estudei</em></>} />

            <div className={styles.eduGrid}>
                <div>
                    <h3 className={styles.columnTitle}>Formação Acadêmica</h3>
                    <div className={styles.itemList}>
                        {educationData.academic.map((item, idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.period}>{item.period} • {item.type}</div>
                                <h4 className={styles.title}>{item.course}</h4>
                                <div className={styles.subtitle}>{item.institution}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className={styles.columnTitle}>Cursos & Especializações</h3>
                    <div className={styles.itemList}>
                        {educationData.courses.map((item, idx) => (
                            <div key={idx} className={styles.card}>
                                <div className={styles.period}>{item.hours}</div>
                                <h4 className={styles.title}>{item.name}</h4>
                                <div className={styles.subtitle}>{item.platform}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};