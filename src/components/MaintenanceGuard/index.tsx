import { useState, useEffect } from 'react';
import { Modal } from '@/components/Modal';
import styles from './MaintenanceGuard.module.scss';

export const MaintenanceGuard = () => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'j') {
        setIsLocked(false);
        sessionStorage.setItem('dev_access', 'granted');
      }
    };

    if (sessionStorage.getItem('dev_access') === 'granted') {
      setIsLocked(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Modal 
      isOpen={isLocked} 
      onClose={() => {}}
      title="SISTEMA EM MANUTENÇÃO"
      noHeader
    >
      <div className={styles.container}>
        <div className={styles.glitchBox}>
          <h1 className={styles.errorCode}>STATUS: 503</h1>
          <p className={styles.message}>
            O portefólio de <strong>João Paulo</strong> está a ser atualizado para a versão 2.0.
          </p>
        </div>
        <div className={styles.terminal}>
          <code>$ sudo apt-get update portfoliov2</code>
          <code> [WAITING FOR AUTHORIZED ACCESS...]</code>
        </div>
      </div>
    </Modal>
  );
};