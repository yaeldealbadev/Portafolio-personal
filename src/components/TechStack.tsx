import type { CSSProperties } from "react";
import { projects } from "@/data/projects";
import { stack } from "@/data/stack";
import { getTechColor, getTechIcon } from "@/data/techIcons";

/** Cuenta en cuántos proyectos aparece una tecnología. */
function contarProyectos(tech: string) {
  return projects.filter((project) => project.tech.includes(tech)).length;
}

export default function TechStack() {
  return (
    <section id="stack" className="w-full max-w-4xl mt-24 scroll-mt-24">
      <h2 className="font-heading text-3xl text-center text-foreground">
        STACK TECNOLÓGICO
      </h2>

      <p className="mt-3 text-center text-sm text-foreground/60">
        Pasa el mouse sobre una tecnología para verla resaltada.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((grupo) => (
          <div
            key={grupo.category}
            className="rounded-xl bg-tarjeta p-5 shadow-sm ring-1 ring-foreground/5"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-bosque">
              {grupo.category}
            </h3>

            <ul className="mt-4 flex flex-col gap-1">
              {grupo.items.map((tech) => {
                const Icono = getTechIcon(tech);
                const usos = contarProyectos(tech);

                return (
                  <li
                    key={tech}
                    style={{ "--marca": getTechColor(tech) } as CSSProperties}
                    className="group flex cursor-default items-center gap-3 rounded-lg px-2 py-2 text-sm text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-menta/15"
                  >
                    <Icono className="text-lg text-bosque transition-all duration-300 group-hover:scale-125 group-hover:text-(--marca)" />

                    <span className="transition-colors duration-300 group-hover:font-medium">
                      {tech}
                    </span>

                    {usos > 0 && (
                      <span className="ml-auto font-mono text-[10px] text-foreground/40 transition-colors duration-300 group-hover:text-bosque">
                        {usos} {usos === 1 ? "proyecto" : "proyectos"}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
