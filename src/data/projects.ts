export type Project = {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  tech: string[];
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "TORNEOS DE JUEGOS",
    description:
      "Pagina web para crear y gestionar torneos de videojuegos, con registro de jugadores, creación de brackets y seguimiento en tiempo real.",
    repoUrl: "https://github.com/yaeldealbadev/plataforma-torneos.git",
    demoUrl: "https://plataforma-torneos.vercel.app",
    tech: ["React", "Vite", "Typescript", "Node.js", "Express", "MySQL"],
    images: [
      "/img/Plataforma-Torneos/1.png",
      "/img/Plataforma-Torneos/2.png",
      "/img/Plataforma-Torneos/3.png",
    ],
  },
  {
    title: "INVENTECH",
    description:
      "Sistema para controlar stock y movimientos de inventario en tiempo real, con autenticación de usuarios y reportes exportables.",
    repoUrl: "https://github.com/SamuelCev/proyecto-angular.git",
    demoUrl: "https://proyecto-angular-frontend-one.vercel.app/login",
    tech: ["Angular", "Tailwind", "Node.js", "Express", "MySQL"],
    images: [
      "/img/InvenTech/1.png",
      "/img/InvenTech/2.png",
      "/img/InvenTech/3.png",
      "/img/InvenTech/4.png",
      "/img/InvenTech/5.png",
    ],
  },
  {
    title: "CHAT LLM",
    description:
      "Pagina web para comunicar con Apis LLM y conversar, con diferentes metricas",
    repoUrl: "https://github.com/yaeldealbadev/IA-practica-.git",
    tech: ["Gemini Api", "Next.js", "Tailwind", "TanStack Query"],
    images: ["/img/Pagina-LLM/1.png"],
  },
  {
    title: "ECOMMERCE",
    description:
      "Ecommerce de productos de tecnologia, con carrito de compras y pasarela de pago",
    repoUrl: "https://github.com/yaeldealbadev/Ecommerce-API-Equipo-Tech-Up.git",
    tech: ["Javascript", "Node.js", "JWT", "Cors", "Express"],
    images: [
      "/img/Ecommerce/1.png",
      "/img/Ecommerce/2.png",
      "/img/Ecommerce/3.png",
      "/img/Ecommerce/4.png",
      "/img/Ecommerce/5.png",
    ],
  },
  {
    title: "INVENTARIO PYMES",
    description:
      "Sistema de inventario para Pymes donde se pueden hacer altas, bajas, reportes, avisos de stock bajo,etc",
    repoUrl: "https://github.com/yaeldealbadev/Inventario-Pyme.git",
    tech: ["Python", "PQT6", "MySQL"],
    images: [
      "/img/Invetario-pymes/1.png",
      "/img/Invetario-pymes/2.png",
      "/img/Invetario-pymes/3.png",
      "/img/Invetario-pymes/4.png",
    ],
  },
  {
    title: "COFFELAKES",
    description:
      "Pagina web de una cafeteria, donde se muestra sus productos",
    repoUrl: "https://github.com/yaeldealbadev/Proyecto-CoffeeLakes.git",
    tech: ["Angular", "Firebase", "Tailwind"],
    images: [
      "/img/CoffeLakes/1.png",
      "/img/CoffeLakes/2.png",
      "/img/CoffeLakes/3.png",
    ],
  },
];
