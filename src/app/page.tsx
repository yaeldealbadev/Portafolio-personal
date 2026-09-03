import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen px-8 sm:px-20 pb-20 pt-1 flex flex-col items-center">
      <Hero />

      <About />

      <section id="projects" className="w-full max-w-4xl mt-24 scroll-mt-24">
        <h2 className="font-heading text-3xl text-center text-foreground">
          PROYECTOS
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <TechStack />

      <ContactForm />
    </main>
  );
}
