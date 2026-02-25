import { SectionTitle } from '@/components/SectionTitle';
import styles from './About.module.scss';
import { StatusBadge } from '@/components/StatusBadge';

import skillsData from '@/data/skills.json';

export const About = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.sectionHeader}>
                <SectionTitle number="01 — Sobre Mim" title={<>Quem sou <em>eu</em></>} />
            </div>

            <div className={styles.aboutGrid}>
                <div className={styles.aboutText}>
                    <p>
                        Olá! Sou o <strong>João Paulo Santos</strong>, estudante de Análise e Desenvolvimento de Sistemas na <strong>FATEC São José dos Campos</strong>. A minha jornada na tecnologia foca-se na construção de bases sólidas e sistemas que resolvem problemas reais.
                    </p>
                    <p>
                        Atualmente, dedico grande parte do meu tempo ao domínio do ecossistema <strong>Java</strong>, explorando a criação de APIs robustas e arquiteturas eficientes no backend. Acredito que a tecnologia deve ser, acima de tudo, funcional e escalável.
                    </p>
                    <p>
                        Além do código, valorizo o processo de aprendizagem contínua e a aplicação de <strong>metodologias ágeis</strong> para garantir a entrega de software com qualidade técnica e valor real para o utilizador.
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
        </section>
    );
};