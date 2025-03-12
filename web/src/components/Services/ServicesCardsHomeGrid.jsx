import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

export default function ServicesCardsHomeGrid() {
  return (
    <section className="container mx-auto py-section px-6 md:px-12 lg:px-16 animate-fadeInUp">
      <h2 className="text-h2 text-center mb-6">Nuestros Servicios</h2>
      <p className="text-paragraph text-center mb-10">
        Descubre cómo nuestros servicios pueden ayudarte a superar desafíos y alcanzar el bienestar emocional.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          title="Terapia Individual"
          description="Sesiones online personalizadas para manejar ansiedad, depresión o duelos. Aprende herramientas únicas para gestionar tus emociones y recuperar el equilibrio emocional."
        />
        <ServiceCard
          title="Terapia Familiar"
          description="Apoyo integral para superar conflictos familiares o problemas escolares. Un enfoque que combina lo emocional y lo académico para fortalecer los lazos."
        />
        <ServiceCard
          title="Enfoque Holístico"
          description="La psicología enfocada en la persona (no al revés). Intervención 100% personalizada a tus necesidades."
          link="/blog/enfoque-holistico"
        />
        <ServiceCard
          title="Problemas Emocionales"
          description="Intervención especializada en cualquier problema emocional que te impida alcanzar la autorrealización."
          link="/blog/problemas-emocionales"
        />
        <ServiceCard
          title="Terapia Online"
          description="Intervención profesional accesible desde cualquier lugar. Comodidad y privacidad garantizadas."
          link="/blog/terapia-online"
        />
      </div>

      {/* Enlace a más servicios */}
      <div className="mt-8 text-center">
        <Link
          to="/servicios"
          className="text-lg text-brandPurple font-semibold hover:underline"
        >
          Ver más servicios
        </Link>
      </div>
    </section>
  );
}
