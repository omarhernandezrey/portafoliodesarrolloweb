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
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-extrabold text-center mb-8">Contáctame</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
        >
          {/* Campo Nombre */}
          <input
            type="text"
            name="user_name"
            placeholder="Tu Nombre"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Campo Correo Electrónico */}
          <input
            type="email"
            name="user_email"
            placeholder="Tu Correo Electrónico"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Campo Mensaje */}
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            rows={5}
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Botón de Enviar */}
          <button
            type="submit"
            disabled={isSending}
            className={`p-3 bg-blue-500 text-white rounded ${
              isSending
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600 transition duration-300"
            }`}
          >
            {isSending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
