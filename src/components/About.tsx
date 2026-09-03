import {
  LuAward,
  LuBriefcase,
  LuClock,
  LuGraduationCap,
  LuLanguages,
  LuMapPin,
  LuTrendingUp,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import {
  bio,
  certifications,
  education,
  experience,
  facts,
  type TimelineItem,
} from "@/data/about";

const iconosPorDato: Record<string, IconType> = {
  Ubicación: LuMapPin,
  Promedio: LuTrendingUp,
  Idiomas: LuLanguages,
  Disponibilidad: LuClock,
};

function Timeline({
  titulo,
  Icono,
  items,
}: {
  titulo: string;
  Icono: IconType;
  items: TimelineItem[];
}) {
  return (
    <div className="rounded-xl bg-tarjeta p-5 shadow-sm ring-1 ring-foreground/5">
      <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bosque">
        <Icono className="text-base" />
        {titulo}
      </h3>

      <ol className="mt-5 flex flex-col gap-6">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-l-2 border-menta/50 pl-4"
          >
            <p className="font-heading text-lg leading-tight text-foreground">
              {item.title}
            </p>
            <p className="text-sm text-foreground/70">{item.subtitle}</p>
            <p className="mt-1 font-mono text-xs text-foreground/50">
              {item.period}
            </p>

            <ul className="mt-3 flex flex-col gap-2">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-foreground/70"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="w-full max-w-4xl mt-24 scroll-mt-24">
      <h2 className="font-heading text-3xl text-center text-foreground">
        SOBRE MÍ
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-foreground/80">
        {bio}
      </p>

      {/* Datos rápidos */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {facts.map(({ label, value }) => {
          const Icono = iconosPorDato[label];

          return (
            <div
              key={label}
              className="rounded-lg bg-menta/15 px-3 py-3 text-center"
            >
              {Icono && <Icono className="mx-auto text-lg text-bosque" />}
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-bosque">
                {label}
              </p>
              <p className="mt-1 text-xs leading-snug text-foreground/80">
                {value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Timeline
          titulo="Experiencia"
          Icono={LuBriefcase}
          items={experience}
        />
        <Timeline
          titulo="Educación"
          Icono={LuGraduationCap}
          items={education}
        />
      </div>

      {/* Certificaciones */}
      <div className="mt-6 rounded-xl bg-tarjeta p-5 shadow-sm ring-1 ring-foreground/5">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bosque">
          <LuAward className="text-base" />
          Certificaciones
        </h3>

        <ul className="mt-4 flex flex-wrap gap-2">
          {certifications.map((certificacion) => (
            <li
              key={certificacion}
              className="rounded-md bg-menta/20 px-2.5 py-1 font-mono text-xs text-bosque"
            >
              {certificacion}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
