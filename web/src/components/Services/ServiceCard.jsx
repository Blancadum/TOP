import React from "react";

export default function ServiceCard({ title, description, link }) {
  return (
    <div className="p-cardPadding border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 bg-white">
      {/* Título */}
      <h3 className="text-h3 font-semibold text-brandPurple mb-3">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-paragraph text-gray-600 mb-4">
        {description}
      </p>

      {/* Enlace */}
      {link && (
        <a
          href={link}
          className="text-brandPurple font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-brandPurple focus:ring-offset-2"
          aria-label={`Leer más sobre ${title}`}
        >
          Leer más
        </a>
      )}
    </div>
  );
}
