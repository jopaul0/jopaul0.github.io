import { useState } from 'react';
import styles from './Projects.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { Modal } from '@/components/Modal';
import { SimpleButton } from '@/components/SimpleButton';

import projectsData from '@/data/projects.json';

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