import React from "react";

export default function TextBlock({ title, subtitle, text }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      {/* Título */}
      {title && (
        <h2
          className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4"
          aria-level="1" // Mejora accesibilidad para encabezados secundarios
        >
          {title}
        </h2>
      )}

      {/* Subtítulo */}
      {subtitle && (
        <p className="text-lg font-semibold text-brandPurple mb-4">{subtitle}</p>
      )}

      {/* Texto */}
      {text && (
        <p className="text-base text-gray-600 leading-relaxed">{text}</p>
      )}
    </section>
  );
}
