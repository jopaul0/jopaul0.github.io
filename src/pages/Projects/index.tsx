import { useState } from 'react';
import styles from './Projects.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { Modal } from '@/components/Modal';
import { SimpleButton } from '@/components/SimpleButton';

const projectsData = [
    {
        id: 1,
        name: "Blog Generator — Gemini AI",
        shortDesc: "Plugin WordPress que utiliza a API do Gemini para automação de conteúdo.",
        fullDesc: "Desenvolvido com arquitetura MVC em PHP, este plugin integra inteligência artificial para gerar artigos otimizados para SEO diretamente no WordPress.",
        techs: ["PHP", "Gemini API", "MVC", "WordPress"],
        github: "https://github.com/jopaul0/blog-generator-gemini-ai",
    },
    {
        id: 2,
        name: "SAMA",
        shortDesc: "Sistema de submissão de atestados e gestão de equipes ágeis.",
        fullDesc: "Projeto acadêmico desenvolvido na FATEC utilizando Python para automatizar processos de RH e monitoramento de saúde.",
        techs: ["Python", "Flask", "SQLite"],
        github: "https://github.com/jopaul0/SAMA",
    },
    {
        id: 3,
        name: "CRM",
        shortDesc: "Plataforma para gestão de relacionamento com o cliente.",
        fullDesc: "Sistema em desenvolvimento focado em escalabilidade e organização de dados comerciais utilizando Laravel.",
        techs: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/jopaul0/Nexus-CRM",
    },
    {
        id: 4,
        name: "Enlace",
        shortDesc: "Sistema desktop para gestão de reuniões e atas corporativas.",
        fullDesc: "Aplicação robusta desenvolvida em Java com persistência de dados em MySQL, focada na organização de pautas e participantes.",
        techs: ["Java", "MySQL", "JDBC"],
        github: "https://github.com/jopaul0/Enlace",
    },
    {
        id: 5,
        name: "PDI",
        shortDesc: "Plataforma de Plano de Desenvolvimento Individual.",
        fullDesc: "Aplicação focada no acompanhamento de metas de carreira e evolução técnica do colaborador.",
        techs: ["Java", "JavaFX", "MySQL"],
        github: "https://github.com/jopaul0/PDI",
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <section className={styles.projects} id="projetos">
            <SectionTitle number="03 — PROJETOS" title={<>O que <em>construí</em></>} />

            <div className={styles.projectsGrid}>
                {projectsData.map((project, index) => {
                    let sizeClass = styles.small;

                    if (index === 0) {
                        sizeClass = styles.large;
                    } else if (index === 1) {
                        sizeClass = styles.medium;
                    }

                    return (
                        <div
                            key={project.id}
                            className={`${styles.projectCard} ${sizeClass}`}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className={styles.imagePreview}>Screenshot: {project.name}</div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{project.name}</h3>
                                <p className={styles.shortDesc}>{project.shortDesc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedProject && (
                <Modal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    title={selectedProject.name}
                >
                    <div className={styles.modalGallery}>
                        <p className={styles.shortDesc}>{selectedProject.fullDesc}</p>
                        {/* Espaço para as tuas imagens */}
                        <div className={styles.imagePreview}>[Galeria de Imagens Aqui]</div>

                        <div className={styles.actions}>
                            <SimpleButton
                                label="Ver no GitHub"
                                onClick={() => window.open(selectedProject.github, '_blank')}
                            />
                            {selectedProject.demo && (
                                <SimpleButton outline label="Visualizar Demo" onClick={() => { }} />
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};