import React from "react";
import { Helmet } from "react-helmet-async"; // Importa Helmet para SEO
import PostCard from "../components/blog/PostCard"; // Ajuste de ruta si es necesario
import Layout from "../components/PageLayout";

export default function Blog() {
  // Ejemplo de datos de posts (podrían venir de una API real)
  const posts = [
    {
      id: 1,
      title: "¿Por qué no vamos al psicólogo hasta que estamos muy mal?",
      date: "15/01/2025",
      excerpt: "Hasta cuándo aguantar el sufrimiento.",
    },
    {
      id: 2,
      title: "5 señales de depresión que no debes ignorar",
      date: "02/01/2025",
      excerpt:
        "Reconocer a tiempo los síntomas de la depresión puede marcar la diferencia...",
    },
  ];

  return (
    <Layout>
      {/* Metadata con Helmet */}
      <Helmet>
        <title>Blog de Psicología y Bienestar - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Explora artículos sobre psicología, salud mental y bienestar. Encuentra consejos, reflexiones y guías para mejorar tu calidad de vida."
        />
        <meta
          name="keywords"
          content="psicología, salud mental, bienestar, depresión, ansiedad, terapia, Blanca de Uña Martín, blog de psicología"
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Blog de Psicología y Bienestar - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Explora artículos sobre psicología, salud mental y bienestar. Encuentra consejos, reflexiones y guías para mejorar tu calidad de vida."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/blog-psicologia.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog de Psicología y Bienestar - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Explora artículos sobre psicología, salud mental y bienestar. Encuentra consejos, reflexiones y guías para mejorar tu calidad de vida."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/blog-psicologia.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Contenido del blog */}
      <section className="container mx-auto bg-white py-8 px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Blog de Psicología y Bienestar
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Descubre artículos, consejos y reflexiones sobre cómo mejorar tu salud, afrontar los desafíos del día a día y construir una vida más plena.
        </p>

        {/* Grid de posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
