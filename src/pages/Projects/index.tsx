import { useState } from 'react';
import styles from './Projects.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { Modal } from '@/components/Modal';
import { SimpleButton } from '@/components/SimpleButton';

const projectsData = [
    {
        id: 1,
        name: "Enlace",
        shortDesc: "Aplicação Desktop para gestão de reuniões com Java e MySQL.",
        fullDesc: "O Enlace permite organizar pautas, participantes e atas de reuniões de forma eficiente.",
        techs: ["Java", "MySQL", "JDBC"],
        github: "https://github.com/jopaul0/Enlace",
        images: ["/enlace-1.png", "/enlace-2.png"],
        size: "large"
    },
    {
        id: 2,
        name: "SAMA",
        shortDesc: "Sistema de submissão de atestados e avaliação de equipas ágeis.",
        fullDesc: "Projeto desenvolvido na FATEC utilizando Python e Flask para gestão de saúde e performance.",
        techs: ["Python", "Flask", "SQLite"],
        github: "https://github.com/jopaul0/SAMA",
        images: ["/sama-1.png"],
        size: "small"
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    return (
        <section className={styles.projects} id="projetos">
            <SectionTitle number="03 — PROJETOS" title={<>O QUE <em>CONSTRUÍ</em></>} />

            <div className={styles.projectsGrid}>
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className={`${styles.projectCard} ${styles[project.size]}`}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className={styles.imagePreview}>Screenshot: {project.name}</div>
                        <div className={styles.content}>
                            <h3 className={styles.name}>{project.name}</h3>
                            <p className={styles.shortDesc}>{project.shortDesc}</p>
                        </div>
                    </div>
                ))}
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
                                <SimpleButton outline label="Aceder à Demo" onClick={() => { }} />
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};