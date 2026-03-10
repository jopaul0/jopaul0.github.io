import { useState } from 'react';
import styles from './Projects.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { Modal } from '@/components/Modal';
import { SimpleButton } from '@/components/SimpleButton';
import { Section } from '@/components/Section';
import type { ProjectData } from './interface';
import projectsData from '@/data/projects.json';
import { Gallery } from '@/components/Gallery';
import { StatusBadge } from '@/components/StatusBadge';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [displayedProject, setDisplayedProject] = useState<ProjectData | null>(null);
    const [visibleCount, setVisibleCount] = useState(5);

    const handleOpen = (project: ProjectData) => {
        setSelectedProject(project);
        setDisplayedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
        setTimeout(() => setDisplayedProject(null), 350);
    };

    const visibleProjects = (projectsData as ProjectData[]).slice(0, visibleCount);

    const modalFooter = displayedProject ? (
        <>
            {displayedProject.links?.github && (
                <SimpleButton
                    label="Ver no GitHub"
                    onClick={() => window.open(displayedProject.links.github, '_blank')}
                />
            )}
            {displayedProject.links?.demo && (
                <SimpleButton
                    outline
                    label="Visualizar Demo"
                    onClick={() => window.open(displayedProject.links.demo, '_blank')}
                />
            )}
            {displayedProject.links?.video && (
                <SimpleButton
                    outline
                    label="Ver Vídeo"
                    onClick={() => window.open(displayedProject.links.video, '_blank')}
                />
            )}
        </>
    ) : null;

    return (
        <Section id="projetos">
            <SectionTitle number="04 — PROJETOS" title={<>O que <em>construí</em></>} />

            <div className={styles.projectsGrid}>
                {visibleProjects.map((project, index) => {
                    let sizeClass = styles.small;
                    if (index === 0) sizeClass = styles.large;
                    else if (index === 1) sizeClass = styles.medium;

                    const bannerUrl = project.images && project.images.length > 0 ? project.images[0].url : '';

                    return (
                        <div
                            key={project.id}
                            className={`${styles.projectCard} ${sizeClass}`}
                            onClick={() => handleOpen(project)}
                        >
                            <div className={styles.imagePreview}>
                                {bannerUrl && <img src={bannerUrl} alt={project.title} className={styles.bannerImg} />}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{project.title}</h3>
                                <p className={styles.shortDesc}>{project.short_description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {visibleCount < projectsData.length && (
                <div className={styles.loadMoreContainer}>
                    <SimpleButton
                        label="CARREGAR MAIS"
                        outline
                        onClick={() => setVisibleCount(projectsData.length)}
                    />
                </div>
            )}

            <Modal
                isOpen={!!selectedProject}
                onClose={handleClose}
                title={displayedProject?.title ?? ''}
                footer={modalFooter}
            >
                {displayedProject && (
                    <div className={styles.modalGallery}>

                        <Gallery images={displayedProject.images} />

                        <p className={styles.shortDesc}>{displayedProject.full_description}</p>

                        <div className={styles.techList}>
                            {displayedProject.technologies.map((tech, index) => (
                                <StatusBadge
                                    key={index}
                                    label={tech}
                                    noDot={true}
                                    interactive={true}
                                />
                            ))}
                        </div>


                    </div>
                )}
            </Modal>
        </Section>
    );
};