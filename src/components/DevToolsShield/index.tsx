import { Modal } from '@/components/Modal';
import { SimpleButton } from '@/components/SimpleButton';
import styles from './DevToolsShield.module.scss';

export const DevToolsShield = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <Modal onClose={() => {}}> 
      <div className={styles.shieldContent}>
        <h2>ACESSO NEGADO</h2>
        <p>
          As ferramentas de programador foram detetadas. Para proteger a 
          <strong> integridade do código</strong> e a propriedade intelectual, 
          a visualização foi suspensa.
        </p>
        <p>Fecha o inspetor e recarrega a página para continuar.</p>
        
        <SimpleButton 
          label="RECARREGAR PÁGINA" 
          onClick={handleReload}
          className={styles.reloadBtn}
        />
      </div>
    </Modal>
  );
};