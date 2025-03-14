import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/Formularios/ContactForm";
import Layout from "../components/PageLayout";

export default function ContactPage() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    motivoConsulta: "",
  });

  const [error, setError] = useState(null); // Para mensajes de error
  const [success, setSuccess] = useState(null); // Para mensajes de éxito

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
    setSuccess(null); 

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Leer respuesta del backend

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el formulario.");
      }

      setSuccess(result.message || "Formulario enviado correctamente.");
      
      // Resetear los campos después del envío exitoso
      setFormData({
        name: "",
        email: "",
        telefono: "",
        motivoConsulta: "",
      });

    } catch (err) {
      setError(err.message || "Error al enviar el formulario.");
      console.error("Error:", err);
    }
  };

  return (
    <Layout>
      {/* SEO Metadata usando Helmet */}
      <Helmet>
        <title>Contáctanos - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Ponte en contacto con Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más. Estoy aquí para ayudarte."
        />
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
          error={error}
          success={success}
        />
      </section>
    </Layout>
  );
}
