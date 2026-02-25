import { useState } from 'react';
import styles from './Contact.module.scss';
import { SectionTitle } from '@/components/SectionTitle';
import { SimpleButton } from '@/components/SimpleButton';
import { InputText, TextArea } from '@/components/Input';
import { sendContactEmail } from '@/services/Web3Forms';
import type { ContactFormData } from '@/services/Web3Forms/interface';
import { validateEmail, validateRequired, validateMessageLength } from '@/utils/validation';

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [statusMsg, setStatusMsg] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const onSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({});

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data: ContactFormData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        const newErrors: { [key: string]: string } = {};
        if (!validateRequired(data.name)) newErrors.name = "O nome é obrigatório.";
        if (!validateEmail(data.email)) newErrors.email = "Insira um email válido.";
        if (!validateMessageLength(data.message)) newErrors.message = "A mensagem deve ter pelo menos 10 caracteres.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            await sendContactEmail(data);
            setStatus("success");
            setStatusMsg("Mensagem enviada com sucesso!");
            form.reset();
        } catch (error: any) {
            setStatus("error");
            setStatusMsg(error.message || "Erro ao enviar.");
        }
    };

    return (
        <section className={styles.contact} id="contato">
            <div className={styles.bgText}>CONTATO</div>
            <SectionTitle number="04 — CONTATO" title={<>Vamos <em>conversar?</em></>} />

            <form className={styles.formContainer} onSubmit={onSubmit}>
                <InputText label="Nome" name="name" placeholder="Teu nome completo" required error={errors.name} />
                <InputText label="Email" name="email" type="email" placeholder="teu@email.com" required error={errors.email} />
                <TextArea label="Mensagem" name="message" placeholder="Como posso ajudar?" required error={errors.message} />

                <SimpleButton
                    label={status === "loading" ? "A ENVIAR..." : "ENVIAR MENSAGEM"}
                    disable={status === "loading"}
                />

                {statusMsg && (
                    <p className={`${styles.statusMsg} ${status === "error" ? styles.error : ""}`}>
                        {statusMsg}
                    </p>
                )}
            </form>
        </section>
    );
};