import { useState } from 'react';
import styles from './Projects.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { Modal } from '@/components/Modal';
import { SimpleButton } from '@/components/SimpleButton';
import { Section } from '@/components/Section';
import type { ProjectData } from './interface';

import projectsData from '@/data/projects.json';
import { Gallery } from '@/components/Gallery';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [displayedProject, setDisplayedProject] = useState<ProjectData | null>(null);

    const handleOpen = (project: ProjectData) => {
        setSelectedProject(project);
        setDisplayedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
        setTimeout(() => setDisplayedProject(null), 350);
    };

    return (
        <Section id="projetos">
            <SectionTitle number="03 — PROJETOS" title={<>O que <em>construí</em></>} />

            <div className={styles.projectsGrid}>
                {(projectsData as ProjectData[]).map((project, index) => {
                    let sizeClass = styles.small;
                    if (index === 0) sizeClass = styles.large;
                    else if (index === 1) sizeClass = styles.medium;

                    return (
                        <div
                            key={project.id}
                            className={`${styles.projectCard} ${sizeClass}`}
                            onClick={() => handleOpen(project)}
                        >
                            <div className={styles.imagePreview}>
                                <img src={project.banner} alt={project.name} className={styles.bannerImg} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{project.name}</h3>
                                <p className={styles.shortDesc}>{project.shortDesc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={handleClose}
                title={displayedProject?.name ?? ''}
            >
                {displayedProject && (
                    <div className={styles.modalGallery}>
                        <p className={styles.shortDesc}>{displayedProject.fullDesc}</p>

                        <Gallery images={displayedProject.images} />

                        <div className={styles.actions}>
                            <SimpleButton
                                label="Ver no GitHub"
                                onClick={() => window.open(displayedProject.github, '_blank')}
                            />
                            {displayedProject.demo && (
                                <SimpleButton
                                    outline
                                    label="Visualizar Demo"
                                    onClick={() => window.open(displayedProject.demo, '_blank')}
                                />
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
};