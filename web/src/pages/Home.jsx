import React, { useState } from "react";
import Layout from "../components/PageLayout";
import HeroSection from "../components/HeroSection/HeroSection";
import FAQAccordion from "../components/faq/FAQ";
import ContactForm from "../components/Formularios/Contacto";
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
