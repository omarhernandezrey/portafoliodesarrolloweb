"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_i3ofsgh", // Tu Service ID
        "template_3z8v0rn", // Tu Template ID
        form.current!,
        "x2atfK6sd3q0ZLUMV" // Tu Public Key
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente 🎉");
          setIsSending(false);
          form.current?.reset();
        },
        (error) => {
          console.error("Error al enviar:", error);
          alert("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.");
          setIsSending(false);
        }
      );
  };

  return (
    <section
  id="contact"
  className="
    relative overflow-hidden text-[var(--text-color)]
    bg-gradient-to-b from-[var(--background-color)] to-[var(--secondary-background-color)]
    py-32 px-4
  "
>
  {/* Wave Top (rotada) */}
  <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-[0] z-0">
    <img
      src="/images/wave-top.svg"
      alt="wave top"
      className="w-full h-auto"
    />
  </div>

  {/* Contenido principal (z-10 para sobreponer a la wave) */}
  <div className="relative z-10 container mx-auto max-w-4xl">
    {/* 
      TÍTULO con el MISMO gradiente 
      (from-[var(--primary-color)] to-[var(--accent-color)]) que "My Services"
    */}
    <h2
      className="
        text-center text-4xl md:text-5xl font-extrabold mb-8
        text-transparent bg-clip-text 
        bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)]
      "
    >
      Contáctame
    </h2>

    <p className="text-center text-[var(--muted-color)] mb-8">
      Estoy aquí para responder tus preguntas y colaborar en tus proyectos.
      Completa el formulario y me pondré en contacto contigo pronto.
    </p>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-6 bg-[var(--secondary-background-color)] p-8 rounded-lg shadow-lg"
    >
      {/* Campo Nombre */}
      <input
        type="text"
        name="user_name"
        placeholder="Tu Nombre"
        className="
          p-4 rounded border border-[var(--muted-color)] bg-[var(--background-color)] text-[var(--text-color)]
          placeholder-[var(--muted-color)] focus:outline-none focus:ring-2
          focus:ring-[var(--accent-color)]
        "
        required
      />

      {/* Campo Correo Electrónico */}
      <input
        type="email"
        name="user_email"
        placeholder="Tu Correo Electrónico"
        className="
          p-4 rounded border border-[var(--muted-color)] bg-[var(--background-color)] text-[var(--text-color)]
          placeholder-[var(--muted-color)] focus:outline-none focus:ring-2
          focus:ring-[var(--accent-color)]
        "
        required
      />

      {/* Campo Mensaje */}
      <textarea
        name="message"
        placeholder="Tu Mensaje"
        rows={5}
        className="
          p-4 rounded border border-[var(--muted-color)] bg-[var(--background-color)] text-[var(--text-color)]
          placeholder-[var(--muted-color)] focus:outline-none focus:ring-2
          focus:ring-[var(--accent-color)]
        "
        required
      ></textarea>

      {/* Botón de Enviar */}
      <button
        type="submit"
        disabled={isSending}
        className={`
          p-4 bg-[var(--accent-color)] text-[var(--background-color)] font-semibold rounded-lg
          shadow-md transition duration-300
          ${isSending ? "opacity-50 cursor-not-allowed" : "hover:bg-[var(--primary-hover-color)]"}
        `}
      >
        {isSending ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  </div>

  {/* Wave Bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
    <img
      src="/images/wave-bottom.svg"
      alt="wave bottom"
      className="w-full h-auto"
    />
  </div>
</section>
  );
}
