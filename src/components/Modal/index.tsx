import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import type { ModalProps } from './interface';

export const Modal = ({ isOpen, onClose, title, children, noHeader = false, footer }: ModalProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else if (shouldRender) {
      setIsClosing(true);
      document.body.style.overflow = 'unset';

      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${isClosing ? styles.isClosingOverlay : ''}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${isClosing ? styles.isClosingModal : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!noHeader && (
          <header className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
              &times;
            </button>
          </header>
        )}
        <div className={styles.content}>
          {children}
        </div>
        
        {footer && (
            <footer className={styles.footer}>
                {footer}
            </footer>
        )}
      </div>
    </div>,
    document.body
  );
};