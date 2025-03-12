import React from "react";
import terapiaOnline from "../../assets/images/terapiaOnline.png"; // Ajusta según la ubicación de tu archivo

export default function HeroSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Título principal */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Terapia Online <span className="text-brandPurple">Profesional</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Tener problemas es natural,{" "}
          <span className="text-brandPurple font-bold">atrévete</span> a solucionarlos.
        </p>

        {/* Imagen destacada */}
        <div className="flex justify-center">
          <img
            src={ terapiaOnline }
            alt="Representación gráfica de terapia online, mostrando conexión global"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
