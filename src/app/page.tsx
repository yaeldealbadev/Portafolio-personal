export default function Home() {
  return (
    <main className="min-h-screen px-8 sm:px-20 pb-20 pt-1 flex flex-col items-center">
      {/* Esta es tu futura sección Hero */}
      <section className="max-w-2xl w-full mt-20">
        
        <span className="bg-menta/20 text-bosque px-3 py-1 rounded-md text-sm font-mono font-medium">
          {'>'} Training FullStack Developer
        </span>
        
        <h1 className="text-5xl mt-6 mb-4 text-foreground font-heading">
          YAEL ADONAI, <br />
          INGENIERO EN SISTEMAS COMPUTACIONALES
        </h1>
        
        <p className="text-lg mb-8 opacity-80">
          La constancia es la clave del éxito. Con dedicación y esfuerzo, podemos superar cualquier obstáculo y alcanzar nuestras metas.
        </p>

        <button className="bg-bosque text-white px-6 py-3 rounded-md font-medium hover:bg-foreground transition-colors duration-300">
          Explorar Proyectos
        </button>

      </section>
    </main>
  );
}