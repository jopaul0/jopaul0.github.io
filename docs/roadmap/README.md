# Roadmap de Desenvolvimento: Portfólio Profissional

Este roadmap descreve as etapas técnicas para a construção de um portfólio robusto utilizando **React**, **TypeScript** e **Sass**, com foco em boas práticas de arquitetura aprendidas em **ADS**.

---

## Fase 1: Fundação e Core (A Base)
- [X] **Setup do Ambiente:** Iniciar projeto com Vite, configurar `tsconfig.json` e estrutura de pastas modular.
- [X] **Arquitetura Sass:** Criar `src/styles/` com:
    - `_variables.scss`: Cores, fontes e espaçamentos.
    - `_mixins.scss`: Media queries para responsividade.
    - `global.scss`: Reset de CSS e estilos base.
- [X] **Sistema de Temas (Dark/Light):** Implementar variáveis CSS controladas por `data-theme` no Sass.
- [ ] **Segurança (DevTools Guard):** Implementar lógica para detectar abertura do console e renderizar o "bloqueio" ou mensagem customizada.

## Fase 2: Estrutura Global (Layout)
- [X] **Navbar Responsiva:**
    - [X]  Efeito *glassmorphism* no background.
    - [X] Lógica de Scroll Suave para as seções.
    - [ ] Toggle Switch funcional para alternar entre modo claro e escuro.
    - [X] Menu hambúrguer para dispositivos móveis.
- [X] **Footer:**
    - [X] Links para redes sociais (GitHub, LinkedIn).
    - [X] Seção de créditos mencionando as referências visuais (Ruan, Thainan, etc.).

## Fase 3: Seções de Interface (UI)
- [ ] **Hero Section:** Introdução de impacto, título dinâmico e Call to Action (CTA).
- [ ] **About Me:** Texto sobre formação acadêmica na FATEC, experiência com Java/Python e uso de Linux Mint.
- [ ] **Skills Section:** Grid organizado por categorias (Frontend, Backend, Ferramentas) com ícones.
- [ ] **Projects Section:** - [ ] Componente `ProjectCard.tsx` com tipos definidos.
    - [ ] Listagem de projetos (Enlace, SAMA, Gerador de Artigos).
    - [ ] Efeitos de hover e transições suaves com Sass.

## Fase 4: Comunicação (Contact)
- [ ] **Formulário de Contato:** Criação do componente com validação de campos via TypeScript.
- [ ] **Integração sem Backend:** Configuração do Web3Forms ou EmailJS para envio de e-mails direto para sua caixa de entrada.
- [ ] **Estados de UI:** Implementar animações de carregamento (loading) e mensagens de sucesso/erro após o envio.

## Fase 5: Finalização e Deploy
- [ ] **Responsividade Crítica:** Ajuste fino de todos os componentes para telas pequenas.
- [ ] **Otimização de Assets:** Conversão de imagens para WebP e compressão de arquivos.
- [ ] **Deploy:** Publicação via Vercel ou Netlify integrada ao repositório GitHub.

---

### Notas de Engenharia
* **Padrão de Projeto:** Utilizar a separação de responsabilidades (Separation of Concerns).
* **Tipagem:** Manter `interfaces` e `types` para todos os dados e retornos de funções.
* **Sass Modules:** Evitar conflitos de nomes de classes usando o padrão `.module.scss`.
