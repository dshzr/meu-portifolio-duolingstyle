
import { Experience, Education, Certification, Skill, Project } from './types';

export const EXPERIENCES: Experience[] = [
  {
    company: "Aprender Conectado",
    role: "Analista Pleno Bubble",
    period: "Setembro de 2025 - o momento",
    location: "Brasília, DF (Remoto)",
    description: "Analista Pleno focado em desenvolvimento de alta performance utilizando Bubble.io."
  },
  {
    company: "Demandanet",
    role: "Consultor de desenvolvimento",
    period: "Novembro de 2024 - Setembro de 2025",
    location: "São José do Rio Preto, SP (Remoto)",
    description: "Trabalhando com Flutter, Node JS, Banco de dados MariaDB, Firebase e APIs Restful."
  },
  {
    company: "Sem Codar",
    role: "Professor",
    period: "Dezembro de 2023 - Janeiro de 2025",
    location: "Santos, SP (Remoto)",
    description: "Professor especialista em WeWEB ensinando desenvolvimento no-code avançado."
  },
  {
    company: "Desenvolvo",
    role: "Desenvolvedor",
    period: "Maio de 2023 - Dezembro de 2023",
    location: "Santos, SP (Remoto)",
    description: "Desenvolvimento de soluções web e integrações de sistemas."
  },
  {
    company: "Léo Andrade",
    role: "Estágio em Desenvolvimento de Sistemas",
    period: "Setembro de 2021 - Dezembro de 2023",
    location: "Santos, SP",
    description: "Desenvolvimento de POC com tecnologias low-code/no-code e suporte aos usuários."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Cruzeiro do Sul Virtual",
    degree: "Bacharelado, Matemática e Ciência da Computação",
    period: "2025 - 2029"
  },
  {
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    degree: "Ensino Técnico, Desenvolvimento de Sistemas",
    period: "2020 - 2023"
  },
  {
    institution: "Zulmira de Almeida Lambert",
    degree: "Ensino Médio",
    period: "2017 - 2019"
  }
];

export const SKILLS: Skill[] = [
  { name: "Bubble.io", category: "Low-Code / No-Code" },
  { name: "FlutterFlow", category: "Low-Code / No-Code" },
  { name: "WeWeb", category: "Low-Code / No-Code" },
  { name: "n8n", category: "Automação" },
  { name: "JavaScript", category: "Linguagem" },
  { name: "React", category: "Front-end" },
  { name: "Tailwind", category: "Front-end" },
  { name: "Node.js", category: "Back-end" },
  { name: "Supabase", category: "Back-end / Banco de Dados" },
  { name: "Firebase", category: "Back-end / Banco de Dados" },
  { name: "MySQL", category: "Banco de Dados" }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Front End & UX/UI Design",
    organization: "Origamid",
    issueDate: "Setembro de 2024",
    credentialId: "aa267f9a",
    link: "https://www.origamid.com/certificate/aa267f9a"
  },
  {
    name: "HTML e CSS para Iniciantes",
    organization: "Origamid",
    issueDate: "Agosto de 2025",
    credentialId: "05d8be56",
    link: "https://origamid.com/certificate/05d8be56"
  },
  {
    name: "JavaScript Completo ES6",
    organization: "Origamid",
    issueDate: "Agosto de 2025",
    credentialId: "b0a30c83",
    link: "https://origamid.com/certificate/b0a30c83"
  },
  {
    name: "Programação Python do Zero ao Avançado + 32 Projetos",
    organization: "Udemy",
    issueDate: "Outubro de 2023",
    credentialId: "UC-1e2f257b-c096-41c0-b01e-5adf171fc606",
    link: "https://www.udemy.com/certificate/UC-1e2f257b-c096-41c0-b01e-5adf171fc606/"
  },
  {
    name: "CSS Grid",
    organization: "Origamid",
    issueDate: "Agosto de 2021",
    credentialId: "8ff20c39",
    link: "https://www.origamid.com/certificate/8ff20c39"
  },
  {
    name: "CSS Flexbox",
    organization: "Origamid",
    issueDate: "Novembro de 2021",
    credentialId: "9f1dbc2f",
    link: "https://origamid.com/certificate/9f1dbc2f"
  },
  {
    name: "Certificado de autoridade: Programação",
    organization: "DevMedia",
    issueDate: "Dezembro de 2021",
    link: "https://www.devmedia.com.br/certificado/tecnologia/programacao/wellington-santiago-dos-santos-1"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Auxílio Creche",
    description: "Sistema completo para gestão de auxílio creche, integrando regras da CLT e automação de processos. O sistema gerencia o envio de comprovantes e executa uma verificação semestral automática, notificando funcionários e o RH via e-mail sobre pendências e liberações.",
    images: ["/assets/projetos/auxilio_creche.png"],
    tags: ["CLT", "Automação", "RH", "Bubble.io"],
  },
  {
    title: "Sistema de Relatórios de Bug",
    description: "Plataforma de gestão de bugs com interface estilo CRM. Inclui sistema de onboarding via popup para novas funcionalidades e um painel administrativo para controle de tickets com status dinâmicos (Pendente, Em Andamento, Concluído), otimizando o fluxo de manutenção.",
    images: [
      "/assets/projetos/bug_reports.png",
      "/assets/projetos/popup_reportar_bug_envioform.png"
    ],
    tags: ["CRM", "UI/UX", "Gestão", "Bubble.io"],
  },
  {
    title: "Campanhas WhatsApp & Chatbot IA",
    description: "Sistema robusto de campanhas automatizadas integrando Bubble e Uazapi via Webhooks. Realiza disparos diários de relatórios de conectividade escolar para redes internas, externas e regionais. Inclui um chatbot inteligente desenvolvido com OpenAI e N8N no mesmo canal, capaz de fornecer informações em tempo real e gerenciar abertura de tickets de suporte.",
    images: [
      "/assets/projetos/campanhas_whatsapp.png",
      "/assets/projetos/campanhas_whatsapp_2.png"
    ],
    tags: ["Bubble.io", "N8N", "OpenAI", "Automação"],
  },
  {
    title: "Sistema de Gestão de Férias",
    description: "Plataforma interna para controle de férias desenvolvida em Bubble. O sistema gerencia o ciclo completo de solicitações, validando regras de períodos aquisitivos, saldo de dias disponíveis, antecedência mínima para pedidos e fluxos de aprovação hierárquica, garantindo conformidade com as políticas da empresa.",
    images: ["/assets/projetos/ferias.png"],
    tags: ["RH", "Gestão Interna", "Bubble.io", "Workflow"],
  },
  {
    title: "Gestão de Alteração Cadastral",
    description: "Sistema self-service para atualização de dados de colaboradores. Inclui um painel administrativo para o RH com histórico detalhado de solicitações, permitindo a aprovação ou recusa de mudanças. Em caso de aprovação, o sistema realiza a atualização automática dos dados no banco, eliminando processos manuais.",
    images: ["/assets/projetos/sistema_solicitacao_cadastro_usuario.png"],
    tags: ["Automação", "RH", "Bubble.io", "Data Management"],
  }
];
