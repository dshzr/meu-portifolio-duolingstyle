
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
  { name: "Front End & UX/UI Design" },
  { name: "CSS Grid" },
  { name: "JavaScript Completo ES6" },
  { name: "HTML e CSS para Iniciantes" }
];

export const PROJECTS: Project[] = [
  // Ainda não há projetos, mas a estrutura está pronta.
  // {
  //   title: "Seu Projeto Épico",
  //   description: "Uma solução incrível construída com No-code.",
  //   tags: ["Bubble.io", "API"],
  //   link: "#",
  // }
];
