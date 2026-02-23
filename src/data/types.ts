// src/data/types.ts

export type MesAbreviado =
  | "Jan"
  | "Fev"
  | "Mar"
  | "Abr"
  | "Mai"
  | "Jun"
  | "Jul"
  | "Ago"
  | "Set"
  | "Out"
  | "Nov"
  | "Dez"
  | "Atual";

export type PeriodoPonto = {
  mes: MesAbreviado | null;
  ano: number | null;
};

export type Periodo = [PeriodoPonto, PeriodoPonto];

export type ItemBase = {
  titulo: string;
  periodo: Periodo;
  descricao: string;
  responsabilidades: string[];
};

export type SkillsCategoria = {
  categoria: string;
  tecnologias: string[];
};

export type ProjetoLink = {
  label: string;
  url: string;
};

export type ProjetoItem = ItemBase & {
  links?: ProjetoLink[];
};

export type Secao<TItem> = {
  descricao: string;
  itens: TItem[];
};

export type SobreItem = {
  titulo: string;
  descricao: string[];
};

export type Endereco = {
  cidade: string;
  estado: string;
  pais: string;
};

export type Contato = {
  endereco: Endereco;
  telefone: string;
  email: string;
};

export type Resumo = {
  descricao: string;
  texto: string;
};

export type IdiomaItem = {
  idioma: string;
  nivel: string;
};

export type IdiomasSection = {
  descricao: string;
  itens: IdiomaItem[];
};

export type Adicional = {
  descricao: string;
  itens: string[];
  linkedin: string;
  github: string;
};

export type DadosCV = {
  titulo: string;
  nome: string;
  sobrenome: string;
  nomeCompleto: string;
  nascimento: string;
  descricao: string;

  sobre: SobreItem;

  idiomas: IdiomasSection;

  skills: {
    descricao: string;
    itens: SkillsCategoria[];
  };

  experiencia: Secao<ItemBase>;
  resumo: Resumo;
  projetos: Secao<ProjetoItem>;
  formacao: Secao<ItemBase>;
  certificacoes: Secao<ItemBase>;

  contato: Contato;
  adicional: Adicional;
};
