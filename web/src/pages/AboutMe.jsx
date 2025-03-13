import React from "react";
import { Helmet } from "react-helmet-async"; // Importa Helmet para SEO
import CTABanner from "../components/CTA-Button/CtaBanner"; 
import Layout from "../components/PageLayout"; 

export default function SobreMi() {
  return (
    <Layout>
      <Helmet>
        <title>Sobre mí - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, depresión, ansiedad y más. Descubre su enfoque profesional y humano en cada sesión."
        />
        <meta
          name="keywords"
          content="psicología online, terapia, ansiedad, depresión, Blanca de Uña Martín, psicóloga, terapia personalizada, bienestar emocional"
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Sobre mí - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, ansiedad, depresión y bienestar emocional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/blanca-de-una-martin.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobre mí - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Conoce a Blanca de Uña Martín, psicóloga especializada en terapias online, ansiedad, depresión y bienestar emocional."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/blanca-de-una-martin.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Contenido principal */}
      <section className="container mx-auto bg-white py-8 px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Sobre mí
        </h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          ¡Hola! Soy <strong>Blanca de Uña Martín</strong>, psicóloga especializada en <strong>terapias online</strong> y con amplia experiencia trabajando con personas de habla hispana en diferentes partes del mundo. Mi compromiso es ayudarte a descubrir <strong>herramientas prácticas y efectivas</strong> para gestionar emociones complejas y resolver esos conflictos internos que te frenan.
        </p>
        <p className="text-lg text-center text-gray-600 mb-6">
          Creo firmemente en la importancia de una <strong>atención cercana y personalizada</strong>. Por ello, mi prioridad es crear un <em>espacio seguro y libre de juicios</em> donde puedas expresarte con confianza.
        </p>

        {/* Banner de llamada a la acción */}
        <div className="mt-12 text-center">
          <CTABanner
            showTitle={true}
            showSubtitle={true}
            showContactButton={true}
            showPricingButton={true}
          />
        </div>
      </section>
    </Layout>
  );
}
