import Image from "next/image";

import { Dados } from "../../data/dados";
import foto from "../img/perfil3.png";

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

export default function CreativePage() {
  return (
    <div className="theme-creative min-h-screen bg-(--background) text-(--foreground)">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <a href="#topo" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border">{Dados.nome[0]}</span>
            <span>{Dados.sobrenome}</span>
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:underline" href="#sobre">
              Sobre
            </a>
            <a className="hover:underline" href="#skills">
              Skills
            </a>
            <a className="hover:underline" href="#projetos">
              Projetos
            </a>
            <a className="hover:underline" href="#experiencia">
              Experiência
            </a>
            <a className="hover:underline" href="#contato">
              Contato
            </a>
          </div>
        </nav>
      </header>

      <main id="topo" className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* Texto */}
            <div>
              <p className="text-sm">{Dados.titulo}</p>

              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                {Dados.nomeCompleto}
              </h1>

              <p className="mt-4 text-base leading-relaxed">{Dados.descricao}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <SiLinkedin className="text-2xl hover:text-3xl transition-all duration-300" />
                <SiGithub className="text-2xl hover:text-3xl transition-all duration-300" />
                <SiWhatsapp className="text-2xl hover:text-3xl transition-all duration-300" />
              </div>
            </div>

            {/* Imagem */}
            <div className="flex justify-center md:justify-end">
              <div className="relative h-72 w-72 overflow-hidden rounded-lg border">
                <Image
                  src={foto}
                  alt={Dados.nomeCompleto}
                  fill
                  priority
                  sizes="(max-width: 768px) 200px, 300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl pb-10">
          <p className="text-center text-xs font-medium uppercase">PRINCIPAIS SKILLS</p>

          {/* Top skills (mantém seu grid) */}
          <div className="flex items-center justify-center gap-4 mt-5">
            {[
              { title: "React", sub: "Hooks • UI", icon: <SiReact className="text-2xl" /> },
              { title: "Next.js", sub: "App Router", icon: <SiNextdotjs className="text-2xl" /> },
              { title: "TypeScript", sub: "Tipos • DX", icon: <SiTypescript className="text-2xl" /> },
              { title: "JavaScript", sub: "ESNext", icon: <SiJavascript className="text-2xl" /> },
              { title: "Node.js", sub: "APIs • Auth", icon: <SiNodedotjs className="text-2xl" /> },
              { title: "C# / .NET", sub: "Web • Desktop", icon: <SiDotnet className="text-3xl" /> },
            ].map((s) => (
              <div key={s.title} className="group flex items-center gap-3 rounded-xl px-4 py-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl">{s.icon}</span>

                <div className="leading-tight">
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-5">
          <h2 className="text-2xl font-semibold">{Dados.sobre.titulo}</h2>
          {Dados.sobre.descricao.map((paragrafo, index) => (
            <p key={index} className="mt-3 text-sm">
              {paragrafo}
            </p>
          ))}
        </section>

        {/* Projetos */}
        <section id="projetos" className="py-5">
          <h2 className="text-2xl font-semibold">{Dados.projetos.descricao}</h2>

          <div className="flex flex-wrap items-center justify-center gap-4 p-4 border">
            {Dados.projetos.itens.map((projeto) => (
              <div key={projeto.titulo} className="border p-4 w-75">
                <h3 className="font-semibold">{projeto.titulo}</h3>
                <p className="text-sm mt-2">{projeto.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-5">
          <h2 className="text-2xl font-semibold">{Dados.skills.descricao}</h2>
          <div className="flex flex-wrap justify-center gap-4 p-4 border">
            {Dados.skills.itens.map((categoria) => (
              <div key={categoria.categoria} className="flex-1 border p-4">
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
        <section id="experiencia" className="py-5">
          <h2 className="text-2xl font-semibold">{Dados.experiencia.descricao}</h2>
          <div className="flex flex-col gap-4 mt-4">
            {Dados.experiencia.itens.map((item) => (
              <div key={item.titulo} className="border p-4">
                <h3 className="font-semibold">{item.titulo}</h3>
                <p className="text-sm mt-1">{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-5 mt-10 flex flex-col gap-3 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Portfólio. Todos os direitos reservados.</span>
          <span>Feito com Tailwind • Next.js</span>
        </footer>
      </main>
    </div>
  );
}
