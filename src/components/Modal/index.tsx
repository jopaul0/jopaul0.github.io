import type { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

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