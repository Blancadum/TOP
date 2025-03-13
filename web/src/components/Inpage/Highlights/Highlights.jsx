import React from "react";

export default function HighlightPoints({ title, points }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Título de la sección */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
          {title}
        </h2>
      )}

      {/* Lista de puntos */}
      <div className="space-y-6">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105"
            role="listitem" // Mejora de accesibilidad
          >
            {/* Número o ícono */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brandPurple to-pink-500 text-white flex items-center justify-center font-bold"
              aria-label={`Punto destacado ${index + 1}`} // Mejora de accesibilidad
            >
              {index + 1}
            </div>

            {/* Contenido */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
