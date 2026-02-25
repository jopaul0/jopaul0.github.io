import styles from './About.module.scss';
import { StatusBadge } from '@/components/StatusBadge';

export const About = () => {
    return (
        <section className={styles.about} id="sobre">
            <div className={styles.sectionHeader}>
                <span className={styles.sectionNum}>01 — Sobre</span>
                <h2 className={styles.sectionTitle}>Quem sou <em>eu</em></h2>
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
                    <div className={styles.skillsGroup}>
                        <div className={styles.groupTitle}>Tecnologias de Foco</div>
                        <div className={styles.skillTags}>
                            <StatusBadge label="Java" variant="default" noDot />
                            <StatusBadge label="Spring Boot" variant="default" noDot />
                            <StatusBadge label="SQL / MySQL" variant="default" noDot />
                            <StatusBadge label="Python" variant="default" noDot />
                            <StatusBadge label="Node.js" variant="default" noDot />
                        </div>
                    </div>

                    <div className={styles.skillsGroup}>
                        <div className={styles.groupTitle}>Ferramentas & Fluxo</div>
                        <div className={styles.skillTags}>
                            <StatusBadge label="Git / GitHub" variant="default" noDot />
                            <StatusBadge label="Docker" variant="default" noDot />
                            <StatusBadge label="Linux" variant="default" noDot />
                            <StatusBadge label="Scrum" variant="default" noDot />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};