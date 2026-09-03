"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { LuSquarePlay } from "react-icons/lu";
import type { Project } from "@/data/projects";
import { getTechIcon } from "@/data/techIcons";

export default function ProjectCard({ project }: { project: Project }) {
  const [imagenActual, setImagenActual] = useState(0);
  const [enPausa, setEnPausa] = useState(false);

  const slug = project.title.toLowerCase().replace(/\s+/g, "-");
  const imagenes = project.images ?? [];

  // Avanza sola de imagen en imagen cada 3 segundos.
  useEffect(() => {
    if (imagenes.length <= 1 || enPausa) return;

    const intervalo = setInterval(() => {
      setImagenActual((actual) => (actual + 1) % imagenes.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagenes.length, enPausa]);

  return (
    <article
      onMouseEnter={() => setEnPausa(true)}
      onMouseLeave={() => setEnPausa(false)}
      className="group flex flex-col overflow-hidden rounded-xl bg-tarjeta shadow-sm ring-1 ring-foreground/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-menta"
    >
      {/* Barra superior estilo terminal */}
      <div className="flex items-center gap-3 bg-bosque px-4 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-menta/60" />
          <span className="h-2 w-2 rounded-full bg-menta/60" />
          <span className="h-2 w-2 rounded-full bg-menta/60" />
        </span>
        <span className="font-mono text-xs text-menta">
          {`> ${slug} // ${project.tech[0]}`}
        </span>
      </div>

      {/* Galería de capturas */}
      {imagenes.length > 0 && (
        <div className="relative aspect-video overflow-hidden bg-bosque/10">
          {imagenes.map((imagen, indice) => (
            <Image
              key={imagen}
              src={imagen}
              alt={`Captura ${indice + 1} de ${project.title}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`object-contain transition-all duration-700 group-hover:scale-105 ${
                indice === imagenActual ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {imagenes.length > 1 && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-linear-to-t from-foreground/70 to-transparent p-3">
              {imagenes.map((imagen, indice) => (
                <button
                  key={imagen}
                  type="button"
                  onClick={() => setImagenActual(indice)}
                  aria-label={`Ver captura ${indice + 1} de ${project.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    indice === imagenActual
                      ? "w-6 bg-menta"
                      : "w-2 bg-tarjeta/70 hover:bg-tarjeta"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Cuerpo de la tarjeta */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-xl text-foreground">{project.title}</h3>

        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => {
            const Icono = getTechIcon(tech);

            return (
              <span
                key={tech}
                title={tech}
                className="flex cursor-default items-center gap-1.5 rounded-md bg-menta/20 px-2.5 py-1 font-mono text-xs text-bosque transition-colors duration-200 hover:bg-bosque hover:text-tarjeta"
              >
                <Icono className="text-sm" />
                {tech}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex items-center gap-5 border-t border-foreground/10 pt-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 pt-4 text-sm font-medium text-foreground transition-colors hover:text-bosque"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pt-4 text-sm font-medium text-foreground transition-colors hover:text-bosque"
            >
              <LuSquarePlay className="text-lg" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
