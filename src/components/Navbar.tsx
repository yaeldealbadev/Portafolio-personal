import Image from "next/image";
export default function Navbar() {
  return <nav className="flex items-center justify-between px-6 py-3 bg-bosque shadow-sm text-white font-heading">
    <a
      href="#home"
      aria-label="Ir al inicio"
      title="Constancia"
      className="group relative flex items-center"
    >
      {/* Halo que aparece detrás del kanji */}
      <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-menta/30 blur-lg transition-transform duration-500 group-hover:scale-150" />

      <Image
        src="/svg/constancia-claro.svg"
        alt="Kanji de constancia, logo de Yael Adonai"
        width={512}
        height={512}
        className="h-11 w-11 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110"
      />
    </a>
    <div className="Links flex space-x-4">
      <a className="nav-link tracking-wide" href="#home">INICIO</a>
      <a className="nav-link tracking-wide" href="#about">SOBRE MI</a>
      <a className="nav-link tracking-wide" href="#projects">PROYECTOS</a>
      <a className="nav-link tracking-wide" href="#stack">STACK</a>
      <a className="nav-link tracking-wide" href="#contact">CONTACTO</a>
    </div>
  </nav>;
}
