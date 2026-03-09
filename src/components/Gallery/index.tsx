import { useState } from 'react';
import styles from './Gallery.module.scss';
import type { GalleryProps } from './interface';

export const Gallery = ({ images }: GalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.pdpContainer}>
            {/* Lado Esquerdo: Visualização Principal */}
            <div className={styles.mainDisplay}>
                <div className={styles.mainImageWrapper}>
                    <img 
                        src={images[activeIndex].url} 
                        alt={images[activeIndex].caption || "Project view"} 
                        key={activeIndex} // Key força o re-render para disparar a animação CSS
                        className={styles.fadeIn}
                    />
                </div>
                {images[activeIndex].caption && (
                    <p className={styles.mainCaption}>{images[activeIndex].caption}</p>
                )}
            </div>

            {/* Lado Direito: Miniaturas Verticais */}
            <aside className={styles.thumbnailsSidebar}>
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        className={`${styles.thumbBtn} ${idx === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(idx)}
                    >
                        <img src={img.url} alt={`Thumbnail ${idx + 1}`} />
                        <div className={styles.overlay} />
                    </button>
                ))}
            </aside>
        </div>
    );
};