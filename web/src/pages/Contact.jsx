import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // Importa Helmet
import ContactForm from "../components/Formularios/Contacto"; // Asegúrate de que la ruta es correcta
import Layout from "../components/PageLayout"; // Asegúrate de que la ruta es correcta

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <Layout>
      {/* Metadata SEO usando Helmet */}
      <Helmet>
        <title>Contáctanos - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Ponte en contacto con Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más. Estoy aquí para ayudarte."
        />
        <meta
          name="keywords"
          content="psicología online, contacto, ayuda emocional, Blanca de Uña Martín, depresión, ansiedad, terapia psicológica"
        />
        <meta name="author" content="Blanca de Uña Martín" />
      </Helmet>

      {/* Contenido principal */}
      <section className="container mx-auto bg-white py-8 px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          ¿Hablamos?
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto.
          Estoy aquí para escucharte y trabajar juntos en tu bienestar.
        </p>

        {/* Formulario de contacto */}
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </Layout>
  );
}
