import React from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesCardsGrid() {
  const [selectedService, setSelectedService] = useState(null); // Estado para el servicio seleccionado

  // Lista de servicios
  const services = [
    {
      id: 1,
      title: "Terapia Individual",
      description:
        "Aprende herramientas personalizadas para gestionar tus emociones y recuperar el equilibrio emocional.",
      link: "/servicios/terapia-individual",
    },
    {
      id: 2,
      title: "Problemas de Pareja",
      description:
        "Si tenéis dificultades de pareja, trabajaremos en mejorar la comunicación y fortalecer el vínculo mediante estrategias adaptadas a vuestras necesidades.",
      link: "/servicios/terapia-pareja",
    },
    {
      id: 3,
      title: "Terapia Familiar",
      description:
        "Un plan adaptado a las necesidades específicas de cada familia.",
      link: "/servicios/terapia-familiar",
    },
    {
      id: 4,
      title: "Terapia Infantojuvenil",
      description:
        "Si tu hijo/a necesita acompañamiento en su desarrollo para superar dificultades que se resisten.",
      link: "/servicios/terapia-infantil",
    },
    {
      id: 5,
      title: "Coaching para Bariátricos",
      description:
        "Preparación psicológica antes y después de una operación bariátrica. Trabajamos autoestima, hábitos saludables y adaptación al cambio.",
      link: "/servicios/coaching-bariatrico",
    },
    {
      id: 6,
      title: "Trastornos Alimentarios",
      description:
        "Intervención especializada en trastornos de la conducta alimentaria (TCA) como anorexia o bulimia.",
      link: "/servicios/tca",
    },
    {
      id: 7,
      title: "Fobia Escolar",
      description:
        "Asesoría en rutinas de estudio, organización y manejo de estrés.",
      link: "/servicios/fobia-escolar",
    },
  ];

  // Encontrar el servicio seleccionado
  const selectedCard = services.find(
    (service) => service.id === parseInt(selectedService)
  );

  return (
    <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-brandPurple mb-4">
        Nuestros Servicios
      </h1>
      <p className="text-paragraph text-center mb-8">
        Descubre los servicios que te ayudarán a alcanzar el bienestar emocional
        y superar los desafíos de la vida diaria.
      </p>

      {/* Selector de servicios */}
      <div className="text-center mb-8">
        <label
          htmlFor="service-select"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Selecciona un servicio:
        </label>
        <select
          id="service-select"
          value={selectedService || ""}
          onChange={(e) => setSelectedService(e.target.value)}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brandPurple focus:border-brandPurple block w-1/2 mx-auto p-2.5"
        >
          <option value="">-- Selecciona un servicio --</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      {/* Mostrar servicio seleccionado */}
      {selectedCard ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          <ServiceCard
            title={selectedCard.title}
            description={selectedCard.description}
            link={selectedCard.link}
          />
        </div>
      ) : (
        <p className="text-center text-gray-600">
          Selecciona un servicio del menú para obtener más detalles.
        </p>
      )}
    </section>
  );
}
