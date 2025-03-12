import React from "react";
import PageLayout from "../components/inpage/PageLayout";
import ServicesCardsGrid from "../components/Services/ServicesCardsGrid";
import ReservationButton from "../components/CTA-Button/CtaBanner";

export default function Servicios() {
  return (
    <>
      {/* Metadata */}
      
        <title>Servicios de Psicología Online - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Servicios de psicología online especializados en depresión, ansiedad, TCA, terapia familiar, problemas de pareja y más. Sesiones personalizadas con Blanca de Uña Martín."
        />
        <meta
          name="keywords"
          content="psicología online, terapia individual, terapia de pareja, coaching bariátrico, trastornos alimentarios, psicóloga Blanca de Uña Martín, terapia familiar, bienestar emocional"
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Servicios de Psicología Online - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Explora los servicios de psicología online especializados en ansiedad, depresión, TCA y más. Sesiones personalizadas para tu bienestar emocional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/servicios" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/servicios-psicologia.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicios de Psicología Online - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Explora los servicios de psicología online especializados en ansiedad, depresión, TCA y más. Sesiones personalizadas para tu bienestar emocional."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/servicios-psicologia.jpg"
        />
        <link rel="icon" href="/favicon.ico" />

      {/* Contenido principal */}
      <PageLayout>
        <ServicesCardsGrid />

        {/* Botón de llamada a la acción */}
        <div className="mt-12 text-center">
          <ReservationButton showTitle={false} />
        </div>
      </PageLayout>
    </>
  );
}
