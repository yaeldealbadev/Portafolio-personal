import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechStack from "@/components/TechStack";
export default function Home() {
  return (
    <main className="min-h-screen px-8 sm:px-20 pb-20 pt-1 flex flex-col items-center">
      {/* Esta es tu futura sección Hero */}
      <Hero/>
      {/*ProjectCard />*/}
      <TechStack />
      <ContactForm />
    </main>
  );
}