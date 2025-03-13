import React from "react";
import Layout from "../../../components/PageLayout"; // Asegúrate de que la ruta es correcta
import BlogPost from "../../../components/blog/BlogPost"; // Ajusta la ruta si es necesario

function AnsiedadPost() {
  return (
    <Layout>
      {/* El contenido se pasa a BlogPost como children */}
      <BlogPost
        title="Ansiedad: Cómo manejarla"
        date="15 de marzo de 2025"
        author="Blanca de Uña Martín"
        imageSrc="/images/ansiedad.jpg"
        tags={["ansiedad", "estrés", "psicología", "bienestar"]}
      >
        {/* El contenido del artículo es el children que pasa al BlogPost */}
        <p className="text-paragraph">
          La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés. Sin embargo, cuando es persistente, puede afectar la calidad de vida. En este artículo, exploramos estrategias para gestionarla de manera saludable.
        </p>

        <h2 className="text-h2 mt-6 mb-4">Síntomas comunes de la ansiedad</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Palpitaciones o taquicardia</li>
          <li>Respiración acelerada</li>
          <li>Sensación de preocupación constante</li>
          <li>Tensión muscular</li>
          <li>Problemas para dormir</li>
        </ul>

        <h2 className="text-h2 mt-6 mb-4">Estrategias para controlar la ansiedad</h2>
        <p className="text-paragraph">
          Existen diversas técnicas que pueden ayudar a reducir la ansiedad, como la meditación, la terapia cognitivo-conductual y el ejercicio regular. Además, es fundamental contar con apoyo emocional.
        </p>
      </BlogPost>
    </Layout>
  );
}

export default AnsiedadPost;
