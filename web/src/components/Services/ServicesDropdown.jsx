import React from "react";
import { useState } from "react";

export default function ServicesDropdown() {
  const [selectedService, setSelectedService] = useState(null);

  // Opciones del desplegable y sus respectivas tarjetas de servicios
  const services = [
    {
      id: 1,
      name: "Terapia Individual",
      description: "Sesiones personalizadas para trabajar en tu bienestar emocional.",
    },
    {
      id: 2,
      name: "Terapia de Pareja",
      description: "Mejoren la comunicación y trabajen juntos en una relación más saludable.",
    },
    {
      id: 3,
      name: "Terapia Familiar",
      description: "Sesiones grupales para resolver conflictos y fortalecer la dinámica familiar.",
    },
    {
      id: 4,
      name: "Coaching Bariátrico",
      description: "Acompañamiento psicológico en procesos de pérdida de peso.",
    },
  ];

  return (
    <section className="container mx-auto py-section px-6 md:px-12 lg:px-16">
      <h1 className="text-h1 text-center mb-6">Servicios</h1>
      <div className="text-center mb-6">
        <label
          htmlFor="services"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Selecciona un servicio:
        </label>
        {/* Desplegable */}
        <select
          id="services"
          onChange={(e) => setSelectedService(e.target.value)}
          value={selectedService || ""}
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brandPurple focus:border-brandPurple block w-1/2 mx-auto p-2.5"
        >
          <option value="" disabled>
            -- Elige un servicio --
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      {/* Tarjeta del servicio seleccionado */}
      {selectedService && (
        <div
          className="bg-white shadow-md rounded-lg p-6 mt-6"
          aria-live="polite"
        >
          <h2 className="text-lg font-bold text-brandPurple mb-2">
            {services.find((service) => service.id === parseInt(selectedService)).name}
          </h2>
          <p className="text-gray-600">
            {services.find((service) => service.id === parseInt(selectedService)).description}
          </p>
        </div>
      )}
    </section>
  );
}
