import React from "react";
import { useLocation } from "react-router-dom";
import BlogPost from "../../components/blog/BlogPost";
import TwoColumns from "../../components/inpage/TwoColumns/TwoColumns";
import TextBlock from "../../components/inpage/SectionText/TextBlock";
import HighlightPoints from "../../components/inpage/Highlights/Highlights";
import FAQAccordion from "../../components/faq/FAQ";
import Layout from "../../components/PageLayout";

export default function TerapiaFamiliarPost() {
  const location = useLocation();

  const pageTitles = {
    "terapia-familiar": "La Terapia Familiar",
    // Añadir otras rutas aquí
  };

  const mainTitle = pageTitles[location.pathname.replace("/", "")] || "Terapia Familiar";

  const points = [
    {
      title: "Comunicación efectiva",
      description:
        "Aprende herramientas prácticas para expresar necesidades y emociones, y escuchar activamente a los demás miembros.",
    },
    {
      title: "Resolución saludable de conflictos",
      description:
        "Identifica patrones negativos y desarrolla estrategias para resolver desacuerdos desde el respeto y la empatía.",
    },
    {
      title: "Fortalecimiento de vínculos",
      description:
        "Promueve relaciones más fuertes y cercanas dentro de la familia, creando un ambiente de confianza y apoyo mutuo.",
    },
  ];

  const faqs = [
    {
      question: "¿En qué consiste exactamente una sesión de terapia familiar?",
      answer:
        "En una sesión de terapia familiar participan varios miembros de la familia junto con el terapeuta. Se abordan conflictos, se facilita la comunicación y se establecen acuerdos para mejorar la convivencia familiar.",
    },
    {
      question: "¿La terapia familiar ayuda en casos de divorcio o separación?",
      answer:
        "Sí, la terapia familiar puede ayudar a manejar los cambios emocionales y prácticos del divorcio, facilitando la adaptación a nuevas dinámicas familiares.",
    },
    {
      question: "¿Desde qué edad pueden asistir los niños a la terapia familiar?",
      answer:
        "Los niños pueden participar desde edades muy tempranas, adaptando siempre el lenguaje y los métodos a sus necesidades específicas y nivel de desarrollo.",
    },
    {
      question: "¿Qué pasa si un familiar se niega a asistir?",
      answer:
        "Puedes iniciar el proceso con los miembros que estén dispuestos. El terapeuta ayudará a involucrar gradualmente al resto, respetando sus tiempos y decisiones personales.",
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <BlogPost
          title={mainTitle}
          date="25 de enero de 2025"
          author="Blanca de Uña Martín"
          imageSrc="/images/header/terapia-familiar.png"
          tags={["psicología", "familia", "terapia"]}
          content={
            <>
              {/* Introducción */}
              <TextBlock
                title={mainTitle}
                subtitle={<span className="block text-lg mt-2">Fortaleciendo los lazos familiares y la comunicación efectiva</span>}
                text="La terapia familiar ofrece un espacio seguro para resolver conflictos, mejorar la comunicación y fortalecer los vínculos afectivos, permitiendo una convivencia saludable y armoniosa."
              />

              {/* Sección 1 */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-6 mb-4">¿Qué es la Terapia Familiar?</h2>
              <TwoColumns
                imageSrc="/images/terapia-familiar-sesion.jpg"
                altText="Familia conversando en terapia"
                title="Un enfoque basado en la unión familiar"
                text="La terapia familiar considera la familia como un sistema donde cada miembro afecta y es afectado por los demás. Se trabajan las dinámicas para promover cambios positivos en conjunto."
              />

              {/* Sección 2 */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-6 mb-4">Beneficios clave de la Terapia Familiar</h2>
              <HighlightPoints title="¿Cómo ayuda la terapia familiar?" points={points} />

              {/* Sección 3 */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-6 mb-4">¿Cuándo es conveniente acudir a Terapia Familiar?</h2>
              <p className="text-paragraph">
                La terapia familiar es especialmente útil ante conflictos recurrentes, cambios familiares importantes, o cuando algún miembro presenta dificultades emocionales o conductuales. Puede ayudar a restablecer el equilibrio familiar en situaciones desafiantes como divorcios, pérdidas o nuevas estructuras familiares.
              </p>

              {/* Sección 4 */}
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mt-6 mb-4">Enfoques terapéuticos utilizados</h2>
              <p className="text-paragraph">
                Se utilizan diversos métodos como la terapia sistémica, estructural y estratégica, adaptándose a las necesidades específicas de cada familia para lograr cambios efectivos y duraderos.
              </p>

              {/* Preguntas Frecuentes */}
              <FAQAccordion
                title="Resuelve tus dudas sobre Terapia Familiar"
                description="Aquí encontrarás respuestas a preguntas habituales sobre la terapia familiar. Si necesitas información adicional, no dudes en contactarme."
                faqs={faqs}
              />
            </>
          }
        />
      </section>
    </Layout>
  );
}