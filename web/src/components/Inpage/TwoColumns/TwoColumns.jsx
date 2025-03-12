import React from "react";

export default function TwoColumns({
  imageSrc,
  altText,
  title,
  text,
  reverse = false,
}) {
  return (
    <section
      className={`max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Imagen */}
      <div className="flex justify-center">
        <img
          src={imageSrc}
          alt={altText || "Imagen descriptiva"}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-base text-gray-600 leading-relaxed">{text}</p>
      </div>
    </section>
  );
}
