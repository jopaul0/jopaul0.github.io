import styles from './Marquee.module.scss';

const techStack = [
    "Java",
    "Spring Boot",
    "SQL",
    "MySQL",
    "Node.js",
    "Python",
    "Flask",
    "TypeScript",
    "Git",
    "Docker",
    "Scrum"
];

export const Marquee = () => {
    return (
        <div className={styles.marqueeWrap}>
            <div className={styles.marqueeTrack}>
                {/* Renderiza a lista original */}
                {techStack.map((tech, index) => (
                    <div key={`original-${index}`} className={styles.marqueeItem}>
                        <span className={styles.dot}></span>
                        <strong>{tech}</strong>
                    </div>
                ))}
                {/* Duplica a lista para o efeito infinito sem cortes */}
                {techStack.map((tech, index) => (
                    <div key={`duplicate-${index}`} className={styles.marqueeItem}>
                        <span className={styles.dot}></span>
                        <strong>{tech}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
};