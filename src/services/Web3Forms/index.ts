import type { ContactFormData } from './interface';

const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.WEB3FORMS_ACCESS_KEY;

export const sendContactEmail = async (data: ContactFormData) => {
    if (!ACCESS_KEY) {
        throw new Error("Configuração ausente: Chave de acesso não encontrada.");
    }

    const formData = new FormData();
    formData.append("access_key", ACCESS_KEY);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("subject", `Novo contato do Portfólio - ${data.name}`);

    try {
        const response = await fetch(WEB3FORMS_API_URL, {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || "Falha ao enviar mensagem.");
        }

        return result;
    } catch (error) {
        console.error("Erro no serviço de contato:", error);
        throw error;
    }
};