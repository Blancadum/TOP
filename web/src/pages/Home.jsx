import React, { useState } from "react";
import PageLayout from "../components/inpage/PageLayout"; // Ajuste de ruta
import HeroSection from "../components/HeroSection/HeroSection"; // Ajuste de ruta
import FAQAccordion from "../components/faq/FAQ"; // Ajuste de ruta y capitalización del archivo
import ContactForm from "../components/Formularios/Contacto"; // Ajuste de ruta
import ServicesCardsHomeGrid from "../components/Services/ServicesCardsHomeGrid"; // Ajuste de ruta
import Separator from "../components/inpage/Separator"; // Ajuste de ruta y capitalización del archivo

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
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Servicios destacados */}
      <section className="section">
        <ServicesCardsHomeGrid />
      </section>

      {/* Formulario de Contacto */}
      <section className="section">
        <h2 className="h2-text">Contáctanos</h2>
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
    </PageLayout>
  );
}
