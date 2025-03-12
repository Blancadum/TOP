import React from "react";
import PricingTable from "../components/PricingTable/PricingTable"; // Ajuste de ruta
import PageLayout from "../components/inpage/PageLayout"; // Ajuste de ruta

export default function PricingPage() {
  return (
    <PageLayout>
      {/* Metadata para la página */}
        <title>Tarifas de Psicología Online - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Conoce nuestras tarifas económicas para sesiones de psicología online. Ofrecemos servicios accesibles y personalizados para tu bienestar emocional."
        />
        <meta
          name="keywords"
          content="tarifas psicología online, precios psicólogo, sesiones económicas, Blanca de Uña Martín, terapia asequible, psicología accesible"
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Tarifas de Psicología Online - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Conoce nuestras tarifas económicas para sesiones de psicología online. Ofrecemos servicios accesibles y personalizados para tu bienestar emocional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/tarifas" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/tarifas-psicologia.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tarifas de Psicología Online - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Conoce nuestras tarifas económicas para sesiones de psicología online. Ofrecemos servicios accesibles y personalizados para tu bienestar emocional."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/tarifas-psicologia.jpg"
        />
        <link rel="icon" href="/favicon.ico" />

      {/* Contenido principal */}
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <h1 className="text-h1 text-center mb-4">Nuestras Tarifas</h1>
        <p className="text-paragraph text-center mb-8">
          Ofrecemos tarifas competitivas y adaptadas a tus necesidades. Creemos que la salud emocional debe ser accesible para todos.
        </p>

        {/* Tabla de Precios */}
        <PricingTable />

        {/* Sección de Preguntas Frecuentes */}
        <div className="mt-12">
          <h2 className="text-h2 text-center mb-4">Preguntas Frecuentes</h2>
          <p className="text-paragraph text-center">
            Si tienes dudas sobre nuestras tarifas o servicios, consulta nuestras preguntas frecuentes o ponte en contacto con nosotros.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
