import type { ModalProps } from './interface';
import styles from './Modal.module.scss';

export const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Fechar modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};