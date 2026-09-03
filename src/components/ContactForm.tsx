"use client";

import { useState } from "react";
import { LuSend } from "react-icons/lu";

// Cambia este correo si algún día quieres recibir los mensajes en otra cuenta.
const CORREO = "yael.dealba.dev@gmail.com";

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(evento: React.SubmitEvent<HTMLFormElement>) {
    evento.preventDefault();

    const datos = new FormData(evento.currentTarget);
    const nombre = String(datos.get("nombre") ?? "");
    const email = String(datos.get("email") ?? "");
    const mensaje = String(datos.get("mensaje") ?? "");

    const asunto = encodeURIComponent(`Contacto desde el portafolio — ${nombre}`);
    const cuerpo = encodeURIComponent(`${mensaje}\n\n---\nDe: ${nombre} (${email})`);

    window.location.href = `mailto:${CORREO}?subject=${asunto}&body=${cuerpo}`;
    setEnviado(true);
  }

  const estiloCampo =
    "w-full border-b border-foreground/20 bg-transparent py-2 text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-bosque";

  return (
    <section id="contact" className="w-full max-w-2xl mt-24 scroll-mt-24">
      <h2 className="font-heading text-3xl text-center text-foreground">
        CONTACTO
      </h2>

      <p className="mt-3 text-center text-sm text-foreground/70">
        ¿Tienes un proyecto en mente? Escríbeme.
      </p>

      <form onSubmit={manejarEnvio} className="mt-10 flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nombre"
              className="font-mono text-xs uppercase tracking-widest text-bosque"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              placeholder="Tu nombre"
              className={estiloCampo}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-mono text-xs uppercase tracking-widest text-bosque"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="tu@correo.com"
              className={estiloCampo}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="mensaje"
            className="font-mono text-xs uppercase tracking-widest text-bosque"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={4}
            placeholder="Cuéntame en qué puedo ayudarte"
            className={`${estiloCampo} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="mx-auto mt-2 flex items-center gap-2 rounded-md bg-bosque px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-foreground"
        >
          <LuSend />
          ENVIAR
        </button>

        {enviado && (
          <p className="text-center text-sm text-bosque">
            Se abrió tu cliente de correo con el mensaje listo para enviar.
          </p>
        )}
      </form>
    </section>
  );
}
