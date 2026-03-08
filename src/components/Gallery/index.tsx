import { useState } from 'react';
import styles from './Gallery.module.scss';
import type { GalleryProps } from './interface';

export const Gallery = ({ images }: GalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');

    const navigate = (newDirection: 'next' | 'prev') => {
        if (isExiting) return;

        setDirection(newDirection);
        setIsExiting(true);

        setTimeout(() => {
            if (newDirection === 'next') {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }
            setIsExiting(false);
        }, 300);
    };

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.displayWindow}>
                <div className={`
                    ${styles.slide} 
                    ${isExiting ? styles.exit : styles.enter} 
                    ${styles[direction]}
                `}>
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].caption || "Project screenshot"}
                    />
                </div>

                {images.length > 1 && (
                    <div className={styles.controls}>
                        <button onClick={() => navigate('prev')} aria-label="Anterior">←</button>
                        <button onClick={() => navigate('next')} aria-label="Próximo">→</button>
                    </div>
                )}
            </div>

            <div className={styles.info}>
                <span className={styles.counter}>
                    {currentIndex + 1} / {images.length}
                </span>
                {images[currentIndex].caption && (
                    <p className={styles.caption}>{images[currentIndex].caption}</p>
                )}
            </div>

            <div className={styles.dots}>
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 'next' : 'prev');
                            setCurrentIndex(idx);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};