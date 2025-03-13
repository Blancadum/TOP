import React from "react";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold text-red-600">404 - Upss, no se ha encontrado el recurso</h1>
      <p className="text-lg text-gray-700 mt-4">
        La página que buscas no existe o ha sido movida.
      </p>
      <a href="/" className="text-blue-500 underline mt-6 inline-block">
        Volver al inicio
      </a>
    </div>
  );
}
