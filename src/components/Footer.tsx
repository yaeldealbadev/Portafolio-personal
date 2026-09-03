import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const redes = [
  {
    nombre: "GitHub",
    url: "https://github.com/yaeldealbadev",
    Icono: FaGithub,
  },
  {
    nombre: "LinkedIn",
    // TODO: reemplaza con la URL real de tu perfil de LinkedIn
    url: "https://www.linkedin.com/in/",
    Icono: FaLinkedin,
  },
  {
    nombre: "Correo",
    url: "mailto:yael.dealba.dev@gmail.com",
    Icono: LuMail,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 bg-tarjeta">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-8 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/60">
          © Yael Adonai {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {redes.map(({ nombre, url, Icono }) => (
            <a
              key={nombre}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nombre}
              title={nombre}
              className="text-foreground/60 transition-colors hover:text-bosque"
            >
              <Icono className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
