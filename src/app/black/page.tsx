import "../black/style.css";
import Image from "next/image";

import { Dados } from "../../data/dados";
import foto from "../img/perfil1.png";

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

export default function BlackPage() {
  return (
    <div className="theme-black min-h-screen py-12 px-4">
      {/* Container principal - "A Folha Preta" */}
      <div className="max-w-4xl mx-auto bg-[--black-paper] shadow-[--shadow-paper] rounded-sm paper-texture-black">
        {/* Header - Cabeçalho minimalista */}
        <header className="sticky top-0 z-50 bg-[--black-paper]/80 backdrop-blur-md border-b border-[--border-subtle]">
          <nav className="flex items-center justify-between px-8 py-6">
            {/* Logo/Nome */}
            <a href="#topo" className="text-lg font-light tracking-wide text-[--white-text] hover:text-[--accent-orange] transition-colors">
              {Dados.nome} {Dados.sobrenome}
            </a>

            {/* Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-light">
              <a className="text-[--white-muted] hover:text-[--accent-orange] transition-colors" href="#sobre">
                Sobre
              </a>
              <a className="text-[--white-muted] hover:text-[--accent-orange] transition-colors" href="#skills">
                Skills
              </a>
              <a className="text-[--white-muted] hover:text-[--accent-orange] transition-colors" href="#projetos">
                Projetos
              </a>
              <a className="text-[--white-muted] hover:text-[--accent-orange] transition-colors" href="#experiencia">
                Experiência
              </a>
              <a className="text-[--white-muted] hover:text-[--accent-orange] transition-colors" href="#contato">
                Contato
              </a>
            </div>
          </nav>
        </header>

        {/* Main - Conteúdo da folha */}
        <main id="topo" className="px-8 md:px-16 py-12">
          {/* Hero Section */}
          <section className="py-20 md:py-28">
            <div className="grid gap-16 md:grid-cols-[1.5fr,1fr] md:items-center">
              <div className="space-y-6">
                {/* Título */}
                <h1 className="text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-[--white-text]">
                  {Dados.nome}
                  <br />
                  <span className="font-normal bg-gradient-to-r from-[--accent-red] via-[--accent-orange] to-[--accent-beige] bg-clip-text text-transparent">
                    {Dados.sobrenome}
                  </span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg text-[--white-muted] font-light leading-relaxed max-w-lg">
                  {Dados.descricao}
                </p>

                {/* Ícones sociais */}
                <div className="flex gap-6 pt-4">
                  <a href="#" className="text-[--white-muted] hover:text-[--accent-orange] hover:shadow-[--glow-orange] transition-all duration-300">
                    <SiLinkedin className="text-xl" />
                  </a>
                  <a href="#" className="text-[--white-muted] hover:text-[--accent-orange] hover:shadow-[--glow-orange] transition-all duration-300">
                    <SiGithub className="text-xl" />
                  </a>
                  <a href="#" className="text-[--white-muted] hover:text-[--accent-orange] hover:shadow-[--glow-orange] transition-all duration-300">
                    <SiWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Foto - efeito polaroid escuro */}
              <div className="flex justify-center md:justify-end">
                <div className="relative bg-[--black-card] p-4 shadow-[--shadow-paper] border border-[--border-subtle] rotate-2 hover:rotate-0 hover:shadow-[--shadow-paper-hover] transition-all duration-300">
                  <div className="relative h-80 w-64 overflow-hidden">
                    <Image
                      src={foto}
                      alt={Dados.nomeCompleto}
                      fill
                      priority
                      sizes="(max-width: 768px) 200px, 300px"
                      className="object-cover"
                    />
                  </div>
                  {/* Borda de destaque */}
                  <div className="absolute inset-0 border-2 border-[--accent-orange] opacity-0 hover:opacity-20 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Principais */}
          <section id="skills" className="py-24 border-t border-[--border-subtle]">
            {/* Título da seção */}
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[--white-subtle] font-light mb-3">
                Stack Principal
              </p>
              <div className="w-16 h-px divider-gradient mx-auto" />
            </div>

            {/* Grid de skills */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                  className="group relative bg-[--black-card] border border-[--border-subtle] rounded-sm p-6 hover:shadow-[--shadow-paper-hover] hover:border-[--border-accent] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Conteúdo do card */}
                  <div className="flex flex-col items-center justify-center gap-3 text-center">
                    <span className="text-[--white-muted] group-hover:text-[--accent-orange] transition-colors duration-300">
                      {s.icon}
                    </span>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-[--white-text]">
                        {s.title}
                      </div>
                      <div className="text-xs text-[--white-subtle] font-light">
                        {s.sub}
                      </div>
                    </div>
                  </div>

                  {/* Indicador de hover */}
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[--accent-orange] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </section>

          {/* Sobre */}
          <section id="sobre" className="py-16 border-t border-[--border-subtle]">
            <h2 className="text-2xl font-light mb-8 text-[--white-text]">
              {Dados.sobre.titulo}
            </h2>
            
            <div className="space-y-4 max-w-3xl">
              {Dados.sobre.descricao.map((paragrafo, index) => (
                <p key={index} className="text-base leading-relaxed text-[--white-muted]">
                  {paragrafo}
                </p>
              ))}
            </div>
          </section>

          {/* Projetos */}
          <section id="projetos" className="py-16 border-t border-[--border-subtle]">
            <h2 className="text-2xl font-light mb-12 text-[--white-text]">
              {Dados.projetos.descricao}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Dados.projetos.itens.map((projeto) => (
                <article
                  key={projeto.titulo}
                  className="bg-[--black-card] border border-[--border-subtle] p-8 hover:shadow-[--shadow-paper-hover] hover:border-[--border-accent] transition-all duration-300 group"
                >
                  <h3 className="text-lg font-medium text-[--white-text] mb-3 group-hover:text-[--accent-orange] transition-colors">
                    {projeto.titulo}
                  </h3>
                  <p className="text-sm text-[--white-muted] leading-relaxed">
                    {projeto.descricao}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Skills Detalhadas */}
          <section className="py-16 border-t border-[--border-subtle]">
            <h2 className="text-2xl font-light mb-12 text-[--white-text]">
              {Dados.skills.descricao}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {Dados.skills.itens.map((categoria) => (
                <div
                  key={categoria.categoria}
                  className="bg-[--black-card] border border-[--border-subtle] p-6 hover:border-[--border-accent] transition-all duration-300"
                >
                  <h3 className="font-medium text-[--accent-orange] mb-4">
                    {categoria.categoria}
                  </h3>
                  <ul className="space-y-2">
                    {categoria.tecnologias.map((tecnologia) => (
                      <li key={tecnologia} className="text-sm text-[--white-muted] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[--accent-orange]" />
                        {tecnologia}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experiência */}
          <section id="experiencia" className="py-16 border-t border-[--border-subtle]">
            <h2 className="text-2xl font-light mb-12 text-[--white-text]">
              {Dados.experiencia.descricao}
            </h2>

            <div className="space-y-12">
              {Dados.experiencia.itens.map((item, index) => (
                <article key={item.titulo} className="relative pl-8 border-l-2 border-[--border-medium]">
                  {/* Marcador da timeline */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[--accent-orange] border-2 border-[--black-paper] shadow-[--glow-orange]" />
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-[--white-text]">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-[--white-muted] leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[--border-subtle] px-8 md:px-16 py-8 text-center">
          <p className="text-xs text-[--white-subtle] font-light">
            © {new Date().getFullYear()} {Dados.nomeCompleto}
          </p>
          <p className="text-xs text-[--white-subtle] mt-2">
            Desenvolvido com{" "}
            <span className="text-[--accent-orange]">Next.js</span> &{" "}
            <span className="text-[--accent-orange]">Tailwind CSS</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
