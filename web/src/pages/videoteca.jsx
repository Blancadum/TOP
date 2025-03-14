import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../components/PageLayout";
import ContactForm from "../components/Formularios/ContactForm";

export default function VideosPage() {
  const videos = [
    { id: 1, url: "https://www.youtube.com/watch?v=V6sSQAqJa0I", title: "Aprende a Hacer el Índice Automático" },
    { id: 2, url: "https://youtu.be/DOkEEBfEHV8?si=6i0qmMRKp3OScLIn", title: "Altas Capacidades y TDAH" },
    { id: 3, url: "https://www.youtube.com/watch?v=7mrTtncokR8", title: "Tráiler como recurso didáctico" },
    { id: 4, url: "https://youtu.be/JA79L1XBUcY?si=5z1Z9zNcuozb60Q3", title: "Encuadre psicológico" },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null); // Estado para el video seleccionado

  const handleVideoSelect = (e) => {
    const videoId = parseInt(e.target.value, 10); // Obtener el ID del video seleccionado
    setSelectedVideo(videos.find((video) => video.id === videoId)); // Buscar el video
  };

  return (
    <Layout>
      {/* Metadata para la página */}
      <Helmet>
        <title>Videos de Apoyo y Consejos | Psicología Online</title>
        <meta
          name="description"
          content="Descubre videos con consejos, estrategias y reflexiones para superar la ansiedad, la depresión y otros problemas emocionales. Aprende de forma práctica y visual con nuestros videos de psicología online."
        />
        <meta
          name="keywords"
          content="psicología online, videos de apoyo, consejos psicológicos, ansiedad, depresión, bienestar emocional, Blanca de Uña Martín"
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Videos de Apoyo y Consejos | Psicología Online" />
        <meta
          property="og:description"
          content="Descubre videos con consejos, estrategias y reflexiones para superar la ansiedad, la depresión y otros problemas emocionales."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/videoteca" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/videos-psicologia.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Videos de Apoyo y Consejos | Psicología Online" />
        <meta
          name="twitter:description"
          content="Descubre videos con consejos, estrategias y reflexiones para superar la ansiedad, la depresión y otros problemas emocionales."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/videos-psicologia.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Contenido principal */}
      <section className="container mx-auto bg-white py-8 px-6 md:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Videos de Apoyo y Consejos
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Explora nuestra videoteca con recursos prácticos para mejorar tu bienestar emocional. Encuentra herramientas visuales para superar la ansiedad, depresión y otros desafíos emocionales.
        </p>

        {/* Dropdown para seleccionar videos */}
        <div className="mb-8 text-center">
          <label htmlFor="video-select" className="text-lg font-semibold text-gray-700 mr-4">
            Selecciona un video:
          </label>
          <select
            id="video-select"
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brandPurple focus:ring-offset-2"
            defaultValue=""
            onChange={handleVideoSelect}
          >
            <option value="" disabled>
              -- Elige un video --
            </option>
            {videos.map((video) => (
              <option key={video.id} value={video.id}>
                {video.title}
              </option>
            ))}
          </select>
        </div>

        {/* Mostrar video seleccionado */}
        {selectedVideo && (
          <div className="flex justify-center mb-8">
            <iframe
              src={selectedVideo.url}
              title={selectedVideo.title}
              className="w-full max-w-lg aspect-video rounded-md shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>
      <ContactForm />
    </Layout>
  );
}
