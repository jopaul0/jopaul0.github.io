import styles from './Marquee.module.scss';
import techStack from '@/data/marquee.json';

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