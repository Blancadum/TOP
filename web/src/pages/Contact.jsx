import React, { useState } from "react";
import ContactForm from "../components/Formularios/Contacto"; // Ruta ajustada para tu estructura

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
    <>
      {/* Metadata SEO */}
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

        {/* Open Graph */}
        <meta property="og:title" content="Contáctanos - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Ponte en contacto con Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/contacto" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/contacto.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contáctanos - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Ponte en contacto con Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/contacto.jpg"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

      {/* Contenido */}
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <h1 className="text-h1 text-center">¿Hablamos?</h1>
        <p className="text-paragraph text-center mt-4">
          Si tienes preguntas o necesitas ayuda, no dudes en ponerte en contacto.
          Estoy aquí para escucharte y trabajar juntos en tu bienestar.
        </p>
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </section>
    </>
  );
}
