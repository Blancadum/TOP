import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/Formularios/ContactForm";
import Layout from "../components/PageLayout";

export default function ContactPage() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit = async (data) => {
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el formulario.");
      }

      setSuccess(result.message || "Formulario enviado correctamente.");
    } catch (err) {
      setError(err.message || "Error al enviar el formulario.");
      console.error("Error:", err);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contáctanos - Blanca de Uña Martín</title>
        <meta name="description" content="Ponte en contacto con Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más. Estoy aquí para ayudarte." />
      </Helmet>

      <section className="container mx-auto bg-white py-8 px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          ¿Hablamos?
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto. 
          Estoy aquí para escucharte y trabajar juntos en tu bienestar.
        </p>

        <ContactForm onSubmit={handleFormSubmit} />
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
      </section>
    </Layout>
  );
}
