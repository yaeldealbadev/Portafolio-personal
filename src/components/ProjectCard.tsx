import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return <article>
    <div className="div">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  </article>;
}
