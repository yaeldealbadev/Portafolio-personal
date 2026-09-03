export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
};

export const bio =
  "Estudiante de Ingeniería en Sistemas Computacionales en 7º semestre, con experiencia real diseñando y entregando automatizaciones de IA conversacional para clientes. Me interesa el backend y el full stack: construir sistemas que funcionen en producción, no solo en el entorno de desarrollo.";

export const education: TimelineItem[] = [
  {
    title: "Ingeniería en Sistemas Computacionales",
    subtitle: "Universidad Autónoma de Aguascalientes",
    period: "Ago 2023 – 2027 (esperado)",
    bullets: [
      "Promedio 8.77 / 10.0 · 271 de 380 créditos completados",
      "Bases de datos y normalización, sistemas web, estructuras de datos, plataformas embebidas",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Desarrollador de Automatización e IA",
    subtitle: "Fractal — emprendimiento propio de automatización",
    period: "2025 – Presente",
    bullets: [
      "Diseñé la arquitectura de prompts de un agente de WhatsApp para calificación de leads: un agente clasificador que enruta conversaciones a agentes especialistas en seis líneas de producto, sobre GPT-4.1.",
      "Construí la automatización completa en n8n, conectando la API de WhatsApp Business, el pipeline multi-agente y Google Sheets como CRM ligero.",
      "Entregué un asistente de citas para una clínica dental, integrando Google Calendar para consultar disponibilidad, agendar y cancelar en tiempo real.",
    ],
  },
  {
    title: "Cocinero y Líder de Cocina",
    subtitle: "Neptuno Oyster Bar",
    period: "2022 – Presente",
    bullets: [
      "Cuatro años de trabajo continuo de medio tiempo mientras estudio ingeniería de tiempo completo.",
      "Responsable del servicio en horas pico y de capacitar al personal nuevo.",
    ],
  },
];

export const certifications = [
  "Mendix Rapid Developer — Mendix",
  "Curso de Python — Jul 2026",
];

export const facts = [
  { label: "Ubicación", value: "Aguascalientes, MX" },
  { label: "Promedio", value: "8.77 / 10.0" },
  { label: "Idiomas", value: "Español nativo · Inglés B1" },
  { label: "Disponibilidad", value: "Medio tiempo, mañanas entre semana" },
];
