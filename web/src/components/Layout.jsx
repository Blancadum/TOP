// src/client/components/Layout.js
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({
  children,
  title = "Terapia online | Bienestar emocional | Web Psicología",
  description = "Solicita sesiones de terapia online para superar problemas emocionales, trastornos de ansiedad, depresión, estrés y mucho más. Mejora tu calidad de vida con especialistas en bienestar mental.",
  image = "/images/terapia-online.jpg", // Imagen por defecto para compartir en redes
  url = "https://web-psicologia.com" // Cambia esto por tu URL final
}) {
  return (
    <div className="flex flex-col min-h-screen">
        {/* Título y descripción */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph (para redes sociales) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Meta adicionales para SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Web Psicología" />
        <meta name="keywords" content="terapia online, bienestar emocional, salud mental, ansiedad, depresión, psicólogos online" />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
