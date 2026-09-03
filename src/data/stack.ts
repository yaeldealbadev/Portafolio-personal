export type StackCategory = {
  category: string;
  items: string[];
};

/**
 * Los nombres deben coincidir con las claves de techIcons.ts
 * para que cada tecnología muestre su ícono de marca.
 */
export const stack: StackCategory[] = [
  {
    category: "Lenguajes",
    items: ["Javascript", "Typescript", "Python", "HTML", "CSS","C++"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Angular", "Express", "Tailwind", "PQT6"],
  },
  {
    category: "Herramientas",
    items: ["Node.js", "MySQL", "Firebase", "Git", "GitHub", "Vite"],
  },
];
