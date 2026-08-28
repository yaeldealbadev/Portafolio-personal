export type Project = {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  tech: string[];
};

export const projects: Project[] = [
  {
  title: "TORNEOS DE JUEGOS",
  description: "Pagina web para crear y gestionar torneos de videojuegos, con registro de jugadores, creación de brackets y seguimiento en tiempo real.",
  repoUrl: "",
  demoUrl: "",
  tech: ["Node.js", "React", "PostgreSQL"],
  },
  {
  title: "INVENTECH",
  description: "Sistema para controlar stock y movimientos de inventario en tiempo real, con autenticación de usuarios y reportes exportables.",
  repoUrl: "",
  demoUrl: "",
  tech: ["Node.js", "React", "PostgreSQL"],
  },
  {
  title: "CHAT LLM",
  description: "Pagina web para comunicar con Apis LLM y conversar, con diferentes metricas",
  repoUrl: "",
  demoUrl: "",
  tech: ["Node.js", "React", "PostgreSQL"],
  },
  {
  title: "WORKFLOW N8N",
  description: "Workflow en n8n de asistente de un consultorio dental encargado de agendar, reagendar, eliminar, avisar, etc a el consultorio",
  repoUrl: "",
  demoUrl: "",
  tech: ["Node.js", "React", "PostgreSQL"],
  },
  {
  title: "INVENTARIO PYMES",
  description: "Sistema de inventario para Pymes donde se pueden hacer altas, bajas, reportes, avisos de stock bajo,etc",
  repoUrl: "",
  demoUrl: "",
  tech: ["Node.js", "React", "PostgreSQL"],
  },
  {
  title: "COFFELAKES",
  description: "Pagina web de una cafeteria, donde se muestra sus productos",
  repoUrl: "",
  demoUrl: "",
  tech: ["Node.js", "React", "PostgreSQL"],
  }

];

