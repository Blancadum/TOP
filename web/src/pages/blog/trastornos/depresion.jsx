import React from "react";
import Layout from "../../../components/PageLayout";
import BlogPost from "../../../components/blog/BlogPost";

function DepresionPost() {
  return (
    <Layout>
      <BlogPost
        title="Depresión: Cómo reconocerla y superarla"
        date="20 de marzo de 2025"
        author="Blanca de Uña Martín"
        imageSrc="/images/depresion.jpg"
        tags={["depresión", "salud mental", "psicología", "bienestar emocional"]}
        content={
          <>
            <p className="text-paragraph">
              La depresión es uno de los trastornos más comunes en la sociedad moderna. Se caracteriza por un sentimiento persistente de tristeza y pérdida de interés en las actividades diarias. En este artículo, abordamos cómo reconocer los síntomas de la depresión y qué estrategias se pueden utilizar para superarla.
            </p>

            <h2 className="text-h2 mt-6 mb-4">Síntomas comunes de la depresión</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Sentimientos de tristeza profunda o vacío</li>
              <li>Falta de energía y motivación</li>
              <li>Pérdida de interés en actividades antes placenteras</li>
              <li>Alteraciones en el sueño (insomnio o exceso de sueño)</li>
              <li>Sentimientos de inutilidad o culpa excesiva</li>
              <li>Dificultad para concentrarse o tomar decisiones</li>
            </ul>

            <h2 className="text-h2 mt-6 mb-4">Estrategias para superar la depresión</h2>
            <p className="text-paragraph">
              La depresión es tratable, y con el enfoque adecuado, las personas pueden recuperarse y mejorar su calidad de vida. Algunas de las estrategias incluyen la terapia cognitivo-conductual, el ejercicio regular, y el apoyo de amigos y familiares. Es importante buscar ayuda profesional si los síntomas persisten.
            </p>

            <h2 className="text-h2 mt-6 mb-4">Terapias recomendadas para la depresión</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Terapia Cognitivo-Conductual (TCC):</strong> Ayuda a identificar y modificar patrones de pensamiento negativos.</li>
              <li><strong>Psicoterapia interpersonal:</strong> Se enfoca en mejorar las relaciones y resolver conflictos interpersonales.</li>
              <li><strong>Medicamentos antidepresivos:</strong> Pueden ser útiles en algunos casos para equilibrar los neurotransmisores en el cerebro.</li>
            </ul>
          </>
        }
      />
    </Layout>
  );
}

export default DepresionPost;
