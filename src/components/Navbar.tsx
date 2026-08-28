import Image from "next/image";
export default function Navbar() {
  return <nav className="flex items-center justify-between px-6 py-3 bg-bosque shadow-sm text-white font-heading">
    <div className="Logo">
      <Image src="/constancia-claro.svg" alt="Logo" width={70} height={40 } />
    </div>
    <div className="Links flex space-x-4">
      <a className="nav-link tracking-wide" href="#home">INICIO</a>
      <a className="nav-link tracking-wide" href="#about">SOBRE MI</a>
      <a className="nav-link tracking-wide" href="#projects">PROYECTOS</a>
      <a className="nav-link tracking-wide" href="#stack">STACK</a>
      <a className="nav-link tracking-wide" href="#contact">CONTACTO</a>
    </div>
  </nav>;
}
