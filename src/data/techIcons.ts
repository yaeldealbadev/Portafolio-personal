import type { IconType } from "react-icons";
import { LuCode } from "react-icons/lu";
import {
  SiAngular,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiQt,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

/**
 * Relaciona el nombre de cada tecnología (tal cual aparece en projects.ts)
 * con su ícono de marca. Las claves deben coincidir exactamente.
 */
const iconsByTech: Record<string, IconType> = {
  Angular: SiAngular,
  Cors: LuCode,
  "C++": SiCplusplus,
  CSS: SiCss,
  Express: SiExpress,
  Firebase: SiFirebase,
  "Gemini Api": SiGooglegemini,
  Git: SiGit,
  GitHub: SiGithub,
  HTML: SiHtml5,
  Javascript: SiJavascript,
  JWT: SiJsonwebtokens,
  MySQL: SiMysql,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Postman: SiPostman,
  PQT6: SiQt,
  Python: SiPython,
  React: SiReact,
  Tailwind: SiTailwindcss,
  "TanStack Query": SiReactquery,
  Typescript: SiTypescript,
  Vercel: SiVercel,
  Vite: SiVite,
};

/** Devuelve el ícono de una tecnología, o uno genérico si no está en el mapa. */
export function getTechIcon(tech: string): IconType {
  return iconsByTech[tech] ?? LuCode;
}

/** Color oficial de cada marca, para resaltarla al pasar el mouse. */
const colorsByTech: Record<string, string> = {
  Angular: "#DD0031",
  "C++": "#00599C",
  CSS: "#663399",
  Express: "#000000",
  Firebase: "#FFCA28",
  "Gemini Api": "#8E75B2",
  Git: "#F05032",
  GitHub: "#181717",
  HTML: "#E34F26",
  Javascript: "#F7DF1E",
  JWT: "#000000",
  MySQL: "#4479A1",
  "Next.js": "#000000",
  "Node.js": "#5FA04E",
  Postman: "#FF6C37",
  PQT6: "#41CD52",
  Python: "#3776AB",
  React: "#61DAFB",
  Tailwind: "#06B6D4",
  "TanStack Query": "#FF4154",
  Typescript: "#3178C6",
  Vercel: "#000000",
  Vite: "#646CFF",
};

/** Color de marca de una tecnología, o el verde bosque de la paleta si no tiene. */
export function getTechColor(tech: string): string {
  return colorsByTech[tech] ?? "var(--bosque)";
}
