import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Helmet } from "react-helmet-async"; // Importar Helmet

export default function Layout({ children, title, description, image, url }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Uso de Helmet para gestionar las metaetiquetas */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="psicología, bienestar, terapia online" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Header y contenido */}
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}