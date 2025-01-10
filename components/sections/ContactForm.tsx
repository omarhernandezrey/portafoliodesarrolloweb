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
        "service_i3ofsgh", // Reemplaza con tu Service ID
        "template_3z8v0rn", // Reemplaza con tu Template ID
        form.current!,
        "x2atfK6sd3q0ZLUMV" // Reemplaza con tu Public Key
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
      className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white scroll-mt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-teal-400">
          Contáctame
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Estoy aquí para responder tus preguntas y colaborar en tus proyectos.
          Completa el formulario y me pondré en contacto contigo pronto.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 bg-gray-700 p-8 rounded-lg shadow-lg"
        >
          {/* Campo Nombre */}
          <input
            type="text"
            name="user_name"
            placeholder="Tu Nombre"
            className="p-4 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />

          {/* Campo Correo Electrónico */}
          <input
            type="email"
            name="user_email"
            placeholder="Tu Correo Electrónico"
            className="p-4 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />

          {/* Campo Mensaje */}
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            rows={5}
            className="p-4 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          ></textarea>

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isSending}
            className={`p-4 bg-teal-400 text-gray-900 font-semibold rounded-lg shadow-md ${
              isSending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-teal-500 transition duration-300"
            }`}
          >
            {isSending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
