import React from "react";
import { Link } from "react-router-dom"; // Usar React Router para navegación interna

export default function Hero({ title, subtitle, buttonText, buttonLink, imageSrc }) {
  return (
    <section className="grid md:grid-cols-2 items-center py-20 px-4">
      {/* Columna de texto */}
      <div className="md:pr-8 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-brandPurple">{title}</h1>
        <p className="mt-4 text-gray-600">{subtitle}</p>
        <Link
          to={buttonLink}
          className="btn-gradient mt-6 inline-block px-6 py-3 bg-gradient-to-r from-brandPurple to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
          aria-label={`Ir a ${buttonLink}`} // Accesibilidad mejorada
        >
          {buttonText}
        </Link>
      </div>

      {/* Columna de imagen */}
      {imageSrc && (
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={imageSrc}
            alt={`Imagen relacionada con ${title}`}
            className="max-w-sm"
          />
        </div>
      )}
    </section>
  );
}
