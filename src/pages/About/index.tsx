import { SectionTitle } from '@/components/SectionTitle';
import styles from './About.module.scss';
import { StatusBadge } from '@/components/StatusBadge';
import { Section } from '@/components/Section';

import skillsData from '@/data/skills.json';

export const About = () => {
    return (
        <Section id="sobre" noGlow>
            <div className="container-section">
                <div className={styles.sectionHeader}>
                    <SectionTitle number="01 — Sobre Mim" title={<>Quem sou <em>eu</em></>} />
                </div>

                <div className={styles.aboutGrid}>
                    <div className={styles.aboutText}>
                        <p>
                            Olá! Sou o <strong>João Paulo Santos</strong>, estudante de Análise e Desenvolvimento de Sistemas na <strong>FATEC São José dos Campos</strong>. Minha trajetória na tecnologia é direcionada à engenharia de bases sólidas e à concepção de sistemas escaláveis orientados à resolução de problemas reais.
                        </p>
                        <p>
                            Atualmente, concentro meus esforços no aprofundamento prático de <strong>LLMs</strong>, na estruturação de arquiteturas de <strong>redes de computadores</strong> e na construção de APIs eficientes no backend. Paralelamente, mantenho um foco intenso no aprimoramento da <strong>língua inglesa</strong>, visando ampliar minha capacidade técnica e integração em ambientes globais.
                        </p>
                        <p>
                            Além da escrita de código, priorizo o aprendizado contínuo e a aplicação rigorosa de metodologias ágeis, assegurando a entrega de softwares com excelência técnica e alto valor agregado.
                        </p>
                    </div>

                    <div className={styles.aboutRight}>
                        {skillsData.map((group, index) => (
                            <div key={index} className={styles.skillsGroup}>
                                <div className={styles.groupTitle}>{group.title}</div>
                                <div className={styles.skillTags}>
                                    {group.skills.map((skill) => (
                                        <StatusBadge
                                            key={skill}
                                            label={skill}
                                            variant="default"
                                            noDot
                                            interactive
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};