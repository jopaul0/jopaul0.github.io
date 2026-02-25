import { useState } from 'react';
import styles from './Contact.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { SimpleButton } from '@/components/SimpleButton';
import { InputText, TextArea } from '@/components/Input';

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

                <InputText label="Nome" name="name" type="text" placeholder="Teu nome completo" required />
                <InputText label="Email" name="email" type="email" placeholder="teu@email.com" required />
                <TextArea label="Mensagem" name="message" placeholder="Como posso ajudar?" required />

                <SimpleButton label="ENVIAR MENSAGEM" />

                {result && <p className={styles.statusMsg}>{result}</p>}
            </form>
        </section>
    );
};