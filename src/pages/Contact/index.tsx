import { useState } from 'react';
import styles from './Contact.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { SimpleButton } from '@/components/SimpleButton';

export const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("A enviar...");
    const formData = new FormData(event.currentTarget);

    // Substitui pela tua chave do Web3Forms
    formData.append("access_key", "TEU_ACCESS_KEY_AQUI");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso!");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Erro:", data);
      setResult(data.message);
    }
  };

  return (
    <section className={styles.contact} id="contato">
      <div className={styles.bgText}>CONTATO</div>
      
      <SectionTitle number="04 — CONTATO" title={<>Vamos <em>conversar?</em></>} />

      <form className={styles.formContainer} onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" required placeholder="Teu nome completo" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required placeholder="teu@email.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea name="message" id="message" required placeholder="Como posso ajudar?"></textarea>
        </div>

        <SimpleButton label="ENVIAR MENSAGEM" />
        
        {result && <p className={styles.statusMsg}>{result}</p>}
      </form>
    </section>
  );
};