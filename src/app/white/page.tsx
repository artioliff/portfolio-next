import "../white/style.css";
import Image from "next/image";

import { Dados } from "../../data/dados";
import foto from "../img/perfil2.png";

import {
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiDotnet,
} from "react-icons/si";

export default function WhitePage() {
  return (
    <div className="theme-white min-h-screen bg-(--desk) py-12 px-4">

      {/* Container principal - "A Folha" */}
      <div className="max-w-4xl mx-auto bg-(--paper) shadow-(--shadow-paper) rounded-md">

        {/* Header - Cabeçalho da folha */}
        <header className="stick top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">

          <nav className="max-w-4x1 max-auto flex items-center justify-between px-8 py-6">
            {/* Logo/Nome - mais sutil */}
            <a href="#topo" className="text-lg font-light tracking-wide text-[--link]">
              {Dados.nome} {Dados.sobrenome}
            </a>

            {/* Menu - tipografia leve */}
            <div className="hidden md:flex items-center gap-8 text-sm font-light">
              <a href="#sobre" className="hover:text-[--link] text-[--link-light] transition-colors">
                Sobre
              </a>
              <a href="#skills" className="hover:text-[--link] text-[--link-light] transition-colors">
                Skills
              </a>
              <a href="#projetos" className="hover:text-[--link] text-[--link-light] transition-colors">
                Projetos
              </a>
              <a href="#experiencia" className="hover:text-[--link] text-[--link-light] transition-colors">
                Experiência
              </a>
              <a href="#contato" className="hover:text-[--link] text-[--link-light] transition-colors">
                Contato
              </a>
            </div>
          </nav>
        </header>

        {/* Main - Conteúdo da folha */}
        <main className="px-8 md:px-16 py-12">
          {/* Hero */}
          <section className="py-20 md:py-28">
            <div className="grid gap-16 md:grid-cols-[1.5fr, 1fr] md:items-center">
              <div className="space-y-6">
                
                {/* Título com tipografia elegante */}
                {/* <p className="text-sm">{Dados.titulo}</p> */}
                <h1 className="text-5x1 md:text-6x1 font-light leading-[1.1] tracking-tight text-[--link]">
                  {Dados.nome}
                  <br />
                  <span className="font-normal">{Dados.sobrenome}</span>
                </h1>
                
                {/* Subtítulo */}
                <p className="text-lg text-[--ink-light] font-light leading-relaxed max-w-lg">{Dados.descricao}</p>

                {/* Ícones sociais - mais espaçados */}
                <div className="flex gap-6 pt-4">
                  <a href="#" className="text-[--ink-light] hover:text-[--ink] transition-colors">
                    <SiLinkedin className="text-x1" />
                  </a>
                  <a href="#" className="text-[--ink-light] hover:text-[--ink] transition-colors">
                    <SiGithub className="text-x1" />
                  </a>
                  <a href="#" className="text-[--ink-light] hover:text-[--ink] transition-colors">
                    <SiWhatsapp className="text-x1" />
                  </a>
                </div>
              </div>

              {/* Foto - efeito polaroid */}
              <div className="flex justify-center md:justify-end">
                <div className="relative bg-white p-4 shadow-[--shadow-paper] rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="relative h-80 w-64 overflow-hidden">
                    <Image
                      src={foto}
                      alt={Dados.nomeCompleto}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Principais - Versão Final Recomendada */}
<section id="skills" className="py-24 border-t border-gray-100">
  {/* Título da seção */}
  <div className="text-center mb-16">
    <p className="text-xs uppercase tracking-[0.2em] text-[--ink-light] font-light mb-3">
      Principais Tecnologias
    </p>
    <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
  </div>

  {/* Grid de skills */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
    {[
      { title: "React", sub: "Hooks • UI", icon: <SiReact className="text-2xl" /> },
      { title: "Next.js", sub: "App Router", icon: <SiNextdotjs className="text-2xl" /> },
      { title: "TypeScript", sub: "Type Safe", icon: <SiTypescript className="text-2xl" /> },
      { title: "JavaScript", sub: "ES6+", icon: <SiJavascript className="text-2xl" /> },
      { title: "Node.js", sub: "Backend", icon: <SiNodedotjs className="text-2xl" /> },
      { title: "C# / .NET", sub: "Enterprise", icon: <SiDotnet className="text-2xl" /> },
    ].map((s) => (
      <div
        key={s.title}
        className="group relative bg-white border border-gray-100 rounded-sm p-6 hover:shadow-[--shadow-paper-hover] hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
      >
        {/* Conteúdo do card */}
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <span className="text-[--ink-light] group-hover:text-[--ink] transition-colors duration-300">
            {s.icon}
          </span>
          
          <div className="space-y-1">
            <div className="text-sm font-medium text-[--ink]">
              {s.title}
            </div>
            <div className="text-xs text-[--ink-light] font-light">
              {s.sub}
            </div>
          </div>
        </div>

        {/* Indicador de hover sutil */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    ))}
  </div>
</section>


          {/* Sobre */}
          <section id="sobre" className="py-16 border-t border-gray-100">
            <h2 className="text-2xl font-light mb-8 text-[--ink]">
              {Dados.sobre.titulo}
            </h2>
            <div className="space-y-4 max-w-3xl">
              {Dados.sobre.descricao.map((paragrafo, index) => (
                <p key={index} className="text-base leading-relaxed text-[--ink-light]">
                  {paragrafo}
                </p>
              ))}
            </div>
          </section>

          {/* Projetos */}
          <section id="projetos" className="py-16 border-t border-gray-100">
  <h2 className="text-2xl font-light mb-12 text-[--ink]">
    {Dados.projetos.descricao}
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {Dados.projetos.itens.map((projeto) => (
      <article
        key={projeto.titulo}
        className="bg-white border border-gray-100 p-8 hover:shadow-[--shadow-paper-hover] transition-all duration-300 group"
      >
        <h3 className="text-lg font-medium text-[--ink] mb-3">
          {projeto.titulo}
        </h3>
        <p className="text-sm text-[--ink-light] leading-relaxed">
          {projeto.descricao}
        </p>
      </article>
    ))}
  </div>
</section>

          {/* Skills */}
          <section id="skills" className="py-16 border-t border-gray-100">
            <h2 className="text-2xl font-light mb-12 text-[--ink]">
              {Dados.skills.descricao}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Dados.skills.itens.map((categoria) => (
                <div key={categoria.categoria} className="flex-1 p-4 border border-amber-50 shadow-(--shadow)">
                  <h3 className="font-semibold">{categoria.categoria}</h3>
                  <ul className="mt-2 list-disc pl-5">
                    {categoria.tecnologias.map((tecnologia) => (
                      <li key={tecnologia} className="text-sm">
                        {tecnologia}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experiência */}
          <section id="experiencia" className="py-16 border-t border-gray-100">
            <h2 className="text-2xl font-light mb-12 text-[--ink]">
              {Dados.experiencia.descricao}
            </h2>

            <div className="space-y-12">
              {Dados.experiencia.itens.map((item, index) => (
                <article key={item.titulo} className="relative pl-8 border-l-2 border-gray-200">
                  {/* Marcador da timeline */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300" />
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-[--ink]">
                      {item.titulo}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-[--ink-light]">
                      {/* Período formatado */}
                      {item.periodo[0].mes}/{item.periodo[0].ano} - {item.periodo[1].mes}/{item.periodo[1].ano}
                    </p>
                    <p className="text-sm text-[--ink-light] leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

        </main>

        {/* Footer - Rodapé da folha */}
        <footer className="border-t border-gray-100 px-8 md:px-16 py-8 text-center">
  <p className="text-xs text-[--ink-light] font-light">
    © {new Date().getFullYear()} {Dados.nomeCompleto}
  </p>
  <p className="text-xs text-[--ink-light] mt-2">
    Desenvolvido com Next.js & Tailwind CSS
  </p>
</footer>

      </div>
    </div>
  );
}
