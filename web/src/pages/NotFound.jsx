import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "../components/PageLayout";


export default function NotFound() {
  return (
    <>
    <PageLayout>
      {/* Metadata SEO */}
      <Helmet>
        <title>Página no encontrada - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="La página que buscas no se encuentra. Tal vez el enlace esté roto o la URL esté mal escrita."
        />
      </Helmet>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        {/* Emoji y título llamativo */}
        <h1 className="text-6xl font-extrabold text-red-600 mb-4">404 😵</h1>
        <h2 className="text-3xl font-semibold text-gray-800">
          ¡Oops! Parece que te has perdido...
        </h2>

        {/* Mensaje divertido */}
        <p className="text-lg text-gray-600 mt-4 max-w-lg">
          Has encontrado el legendario "Vacío del Internet". Tal vez era un portal
          a otra dimensión, o simplemente escribiste mal la URL. 🤷‍♂️
        </p>

        {/* Botón para regresar */}
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
          Volver al hogar antes de que sea tarde 🏠
        </Link>

        {/* Imagen graciosa */}
        <img
          src="/images/404-cat.gif"
          alt="Gato confundido"
          className="mt-8 w-64 h-auto rounded-lg shadow-lg"
        />
      </div>
      </PageLayout>
    </>
  );
}
