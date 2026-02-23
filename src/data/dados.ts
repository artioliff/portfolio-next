// src/data/Dados.ts
import type { DadosCV } from "./types";

export const Dados: DadosCV = {
  titulo: "Desenvolvedor Front-End | React & Next.js | JavaScript | TypeScript | Remoto",
  nome: "Felipe",
  sobrenome: "Artioli",
  nomeCompleto: "Felipe Artioli de Freitas",
  nascimento: "23/11/1987",
  descricao:
    "Sou Felipe Artioli. Venho de experiência com C#/.NET e sistemas corporativos e hoje estou focado em construir interfaces modernas, performáticas e bem estruturadas com HTML, CSS, JavaScript, React e Next.js.",
  idiomas: {
    descricao: "Idiomas",
    itens: [
      { idioma: "Português", nivel: "Nativo" },
      { idioma: "Inglês", nivel: "Básico" },
    ],
  },
  sobre: {
    titulo: "Sobre Mim",
    descricao: [
      "Desenvolvedor com mais de 10 anos de experiência em engenharia de software, atuando na manutenção, evolução e integração de sistemas corporativos de alta complexidade, com forte impacto operacional.",
      "Ao longo da carreira, trabalhei com múltiplas stacks (ASP.NET, C#, SQL Server, Delphi, Windows Forms), garantindo estabilidade, continuidade e modernização gradual de ambientes com grande volume de aplicações e integrações.",
      "Atualmente, direciono minha atuação para o ecossistema Front-End moderno, com foco em React, Next.js, TypeScript e arquitetura de interfaces escaláveis. Aplico conceitos de componentização, organização de estado, consumo eficiente de APIs REST, boas práticas de UI/UX e Clean Code, buscando entregar interfaces performáticas, reutilizáveis e orientadas à experiência do usuário.",
      "Minha experiência prévia com sistemas corporativos complexos me permite desenvolver soluções Front-End com visão arquitetural, entendimento de produto e responsabilidade técnica.",
    ],
  },

  skills: {
    descricao: "Competências Técnicas",
    itens: [
      {
        categoria: "Front-End",
        tecnologias: [
          "HTML5",
          "CSS3 (Flexbox, Grid, Responsivo)",
          "JavaScript (ES6+)",
          "React",
          "Next.js",
          "TypeScript",
        ],
      },
      {
        categoria: "Back-End",
        tecnologias: ["C# / .NET", "ASP.NET", "Windows Forms", "Delphi", "APIs REST"],
      },
      {
        categoria: "Banco de Dados",
        tecnologias: ["SQL Server", "Oracle", "MySQL", "MongoDB"],
      },
      {
        categoria: "Ferramentas",
        tecnologias: ["Git / GitHub", "VS Code", "Postman", "Cypress"],
      },
    ],
  },

  experiencia: {
    descricao: "Experiência Profissional",
    itens: [
      {
        titulo: "Confiança Supermercados — Desenvolvedor de Sistemas (Pleno)",
        periodo: [
          { mes: "Ago", ano: 2024 },
          { mes: "Atual", ano: null },
        ],
        descricao:
          "Atuação em ambiente corporativo de alta complexidade com sustentação, manutenção evolutiva e integrações entre módulos e sistemas internos.",
        responsabilidades: [
          "Manutenção e evolução de sistemas internos em Delphi, ASP.NET e Windows Forms",
          "Integração entre módulos via APIs REST",
          "Correção de bugs e melhorias funcionais com foco em estabilidade",
          "Diagnóstico, testes e validação de soluções em produção",
          "Apoio técnico às áreas de negócio e sustentação de sistemas críticos",
        ],
      },
      {
        titulo: "SinergyTech — Programador de Sistemas (Pleno)",
        periodo: [
          { mes: "Out", ano: 2017 },
          { mes: "Jan", ano: 2023 },
        ],
        descricao:
          "Sustentação e evolução de sistemas web corporativos, com melhorias funcionais, ajustes de interface e integrações REST.",
        responsabilidades: [
          "Manutenção corretiva e evolutiva de sistemas web internos (ASP.NET WebForms/C#)",
          "Desenvolvimento e ajustes de interfaces com HTML5, CSS3 e jQuery",
          "Manutenção de bases SQL Server",
          "Integrações e consumo de APIs REST",
          "Implementação de testes end-to-end com Cypress por iniciativa própria para reduzir regressões",
        ],
      },
      {
        titulo: "UPPERCASE Consultoria — Programador Júnior",
        periodo: [
          { mes: "Fev", ano: 2016 },
          { mes: "Out", ano: 2017 },
        ],
        descricao:
          "Desenvolvimento e manutenção de aplicações web internas, com suporte técnico e participação em demandas de requisitos e implantação.",
        responsabilidades: [
          "Desenvolvimento de aplicações web internas",
          "Implementação de funcionalidades front-end básicas",
          "Criação de consultas SQL e procedures",
          "Participação na análise de requisitos",
          "Suporte às equipes de implantação",
        ],
      },
      {
        titulo: "Store Automação — Analista Programador Jr. I",
        periodo: [
          { mes: "Set", ano: 2015 },
          { mes: "Fev", ano: 2016 },
        ],
        descricao:
          "Desenvolvimento e sustentação de módulos para automação comercial com correções, otimizações e melhorias operacionais.",
        responsabilidades: [
          "Desenvolvimento de módulos para automação comercial",
          "Correção de bugs e otimização de processos",
          "Aprimoramento de relatórios e telas internas",
          "Atendimento a demandas técnicas",
        ],
      },
      {
        titulo: "G&P Projetos e Sistemas — Programador Trainee I",
        periodo: [
          { mes: "Jan", ano: 2014 },
          { mes: "Mar", ano: 2015 },
        ],
        descricao:
          "Manutenção e desenvolvimento de sistemas em C# com implementação de regras de negócio e suporte ao time sênior.",
        responsabilidades: [
          "Manutenção e desenvolvimento de sistemas em C#",
          "Implementação de regras de negócio",
          "Apoio à equipe sênior",
          "Desenvolvimento de telas e rotinas internas",
        ],
      },
      {
        titulo: "G&P Projetos e Sistemas — Analista de Suporte Técnico Jr.",
        periodo: [
          { mes: "Nov", ano: 2012 },
          { mes: "Jan", ano: 2014 },
        ],
        descricao:
          "Suporte técnico remoto, configuração de ambientes e atendimento a usuários (sistemas, redes e software).",
        responsabilidades: [
          "Atendimento técnico remoto a escolas e diretorias",
          "Suporte a sistemas, redes e softwares",
          "Configuração de ambientes e equipamentos",
          "Suporte via telefone e acesso remoto",
        ],
      },
    ],
  },
  resumo: {
    descricao: "Resumo Profissional",
    texto:
      "Desenvolvedor Front-End com mais de 10 anos de experiência em software, especializado em React, Next.js e TypeScript. Focado em criar interfaces modernas, performáticas e bem estruturadas, gerando valor real ao negócio. Com histórico sólido em C#/.NET e sistemas corporativos, trago uma abordagem orientada a resultados: qualidade, estabilidade e entrega contínua.",
  },

  projetos: {
    descricao: "Projetos Desenvolvidos",
    itens: [
      {
        titulo: "To-Do List",
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: null },
        ],
        descricao: "Aplicação de produtividade com filtros, dashboard e temas dinâmicos.",
        responsabilidades: [],
      },
      {
        titulo: "Painel Kanban",
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: null },
        ],
        descricao: "Sistema Kanban com drag & drop, filtros, tags e design responsivo.",
        responsabilidades: [],
      },
      {
        titulo: "Controle Financeiro",
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: null },
        ],
        descricao: "Sistema financeiro com filtros, KPIs e gráficos.",
        responsabilidades: [],
      },
    ],
  },

  formacao: {
    descricao: "Formação & Cursos",
    itens: [
      {
        titulo: "Bacharelado em Sistemas de Informação — FGP",
        // aqui eu padronizei: se concluiu, usa o ano de término e deixa início nulo (ou você pode colocar início real se souber)
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: 2017 },
        ],
        descricao: "Graduação em Sistemas de Informação.",
        responsabilidades: [],
      },
      {
        titulo: "Manutenção de Microcomputadores e Redes — Microlins Macatuba",
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: null },
        ],
        descricao: "Noções de hardware, manutenção e redes.",
        responsabilidades: [],
      },
      {
        titulo: "Informática Básica — SENAI Macatuba",
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: null },
        ],
        descricao: "Fundamentos de informática.",
        responsabilidades: [],
      },
    ],
  },

  certificacoes: {
    descricao: "Certificações",
    itens: [
      {
        titulo: "Certificação Microsoft 70-480 — Programming in HTML5 with JavaScript and CSS3",
        periodo: [
          { mes: null, ano: null },
          { mes: null, ano: null },
        ],
        descricao: "Certificação oficial Microsoft em HTML5, JavaScript e CSS3.",
        responsabilidades: [],
      },
    ],
  },

  contato: {
    endereco: { cidade: "Bauru", estado: "SP", pais: "Brasil" },
    telefone: "(14) 99719-7118",
    email: "felipeartiolidefreitas@gmail.com",
  },

  adicional: {
    descricao: "Informações Adicionais",
    itens: [
      "Disponibilidade para trabalho remoto",
      "Atuação em regime CLT ou PJ",
      "Pretensão salarial: R$ 5.000,00 a R$ 6.000,00 (CLT)",
      "Pretensão salarial: R$ 6.000,00 a R$ 8.000,00 (PJ)",
      "Facilidade de adaptação a novos ambientes",
      "Perfil analítico e organizado",
    ],
    linkedin: "https://linkedin.com/in/artioliff",
    github: "https://github.com/artioliff",
  },
};
