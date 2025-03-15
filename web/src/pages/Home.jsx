import React, { useState } from "react";
import { Link } from "react-router-dom";  // Importar Link para las rutas
import Layout from "../components/PageLayout";
import HeroSection from "../components/HeroSection/HeroSection";
import FAQAccordion from "../components/faq/FAQ";
import ContactForm from "../components/Formularios/ContactForm";
import ServicesCardsHomeGrid from "../components/Services/ServicesCardsHomeGrid";
import Separator from "../components/inpage/Separator";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos enviados:", formData);
    // Lógica adicional para enviar los datos
  };

  return (
    <>
      <Layout>
        {/* Agregar los botones de Registro y Login */}
        <section className="flex justify-center space-x-6 py-6">
          <Link
            to="/register"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Registro
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Login
          </Link>
        </section>

        {/* Hero Section */}
        <HeroSection />

        {/* Servicios destacados */}
        <section className="section">
          <ServicesCardsHomeGrid />
        </section>

        {/* Formulario de Contacto */}
        <section className="section">
          <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </section>

        <Separator />

        {/* Preguntas Frecuentes */}
        <section className="section">
          <FAQAccordion
            title="Preguntas Frecuentes"
            description="Encuentra aquí las respuestas a las dudas más frecuentes sobre nuestros servicios."
          />
        </section>
      </Layout>
    </>
  );
}
