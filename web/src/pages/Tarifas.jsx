import React from "react";
import PricingTable from "../components/PricingTable/PricingTable"; 
import Layout from "../components/PageLayout";
import { Helmet } from "react-helmet-async"; // Importa Helmet

export default function PricingPage() {
  return (
    <Layout>
      {/* Contenido principal */}
      <section className="container mx-auto bg-white py-8 px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">Nuestras Tarifas</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Ofrecemos tarifas competitivas y adaptadas a tus necesidades. Creemos que la salud emocional debe ser accesible para todos.
        </p>

        {/* Tabla de Precios */}
        <PricingTable />
        {/* Sección de Preguntas Frecuentes */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Preguntas Frecuentes</h2>
          <p className="text-lg text-center text-gray-600">
            Si tienes dudas sobre nuestras tarifas o servicios, consulta nuestras preguntas frecuentes o ponte en contacto con nosotros.
          </p>
        </div>
      </section>
    </Layout>
  );
}
