// components/shared/NewsletterForm.tsx
"use client";
import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Aquí deberías integrar tu servicio de suscripción al newsletter.
      // Por ejemplo, podrías usar una API de EmailJS, Mailchimp, etc.
      // Este es un ejemplo simulado:
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-teal-400">Suscríbete a mi Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center">
        <input
          type="email"
          placeholder="Tu Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="
            w-full sm:w-auto flex-1 p-4 rounded-l-lg bg-gray-700 text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-teal-400
          "
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`
            mt-4 sm:mt-0 sm:ml-2 p-4 bg-teal-400 text-gray-900 font-semibold rounded-r-lg
            hover:bg-teal-500 transition-colors duration-300
            ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {status === "loading" ? "Suscribiendo..." : "Suscribirse"}
        </button>
      </form>
      {status === "success" && (
        <p className="text-green-400 mt-2">¡Suscripción exitosa!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-2">Error al suscribirse. Inténtalo de nuevo.</p>
      )}
    </div>
  );
}
