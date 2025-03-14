import React from "react";
import BlogPost from "../../components/blog/BlogPost";
import TwoColumns from "../../components/inpage/TwoColumns/TwoColumns";
import TextBlock from "../../components/inpage/SectionText/TextBlock";
import HighlightPoints from "../../components/inpage/Highlights/Highlights";
import FAQAccordion from "../../components/faq/FAQ";
import Layout from "../../components/PageLayout";

export default function TerapiaDeParejaOnlinePost() {
  const points = [
    {
      title: "Apoyo desde cualquier lugar",
      description:
        "No importa dónde estés, puedes recibir terapia de pareja desde la comodidad de tu hogar.",
    },
    {
      title: "Flexibilidad de horarios",
      description:
        "La terapia online permite que tú y tu pareja elijan el horario que mejor se adapte a su vida diaria.",
    },
    {
      title: "Confidencialidad asegurada",
      description:
        "Las plataformas seguras garantizan que tus sesiones sean privadas y protegidas.",
    },
  ];

  const faqs = [
    {
      question: "¿Es tan efectiva la terapia de pareja online como la presencial?",
      answer:
        "Sí, los estudios muestran que la terapia de pareja online es igualmente efectiva que la presencial, especialmente cuando se lleva a cabo con terapeutas cualificados.",
    },
    {
      question: "¿Qué necesito para realizar una sesión de terapia de pareja online?",
      answer:
        "Solo necesitan un dispositivo con cámara y micrófono, como un ordenador, tablet o smartphone, y una conexión a internet estable.",
    },
    {
      question: "¿Es segura la terapia de pareja online?",
      answer:
        "Sí, las plataformas de terapia online utilizan encriptación para garantizar la privacidad y confidencialidad de las sesiones.",
    },
    {
      question: "¿Qué problemas de pareja se pueden tratar en terapia online?",
      answer:
        "Conflictos de comunicación, celos, infidelidad, problemas sexuales, estrés en la relación, y otros temas comunes en las parejas pueden ser tratados eficazmente online.",
    },
    {
      question: "¿Podemos combinar terapia de pareja online y presencial?",
      answer:
        "Sí, muchas parejas eligen un enfoque mixto, alternando entre sesiones online y presenciales según sus necesidades y preferencias.",
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <BlogPost
          title="Terapia de Pareja Online: Conectando Emocionalmente desde Cualquier Lugar"
          date="22 de enero de 2025"
          author="Blanca de Uña Martín"
          imageSrc="/images/terapia-de-pareja-online.jpg"
          tags={["terapia de pareja online", "relaciones", "psicología", "bienestar emocional"]}
          content={
            <>
              {/* Introducción */}
              <TextBlock 
                title="Reestablece la conexión en tu relación"
                subtitle="La terapia de pareja online puede fortalecer tu relación"
                text="La terapia de pareja online es una herramienta eficaz para mejorar la comunicación y resolver los conflictos que puedan estar afectando a tu relación. Con sesiones cómodas y seguras, puedes trabajar junto a tu pareja en un entorno privado, sin importar la distancia."
              />

              {/* Sección 1 */}
              <h2 className="text-h2 mt-6 mb-4">¿Qué es la Terapia de Pareja Online?</h2>
              <TwoColumns
                imageSrc="/images/terapia-de-pareja-beneficios.jpg"
                altText="Pareja en una sesión de terapia online"
                title="Mejorando la relación a través de la tecnología"
                text="La terapia de pareja online se lleva a cabo mediante videollamadas y otras herramientas digitales. Permite a las parejas obtener apoyo profesional de manera flexible y conveniente, sin comprometer la calidad del tratamiento."
              />

              {/* Sección 2 */}
              <h2 className="text-h2 mt-6 mb-4">Ventajas de la Terapia de Pareja Online</h2>
              <HighlightPoints
                title="Beneficios principales"
                points={points}
              />

              {/* Sección 3 */}
              <h2 className="text-h2 mt-6 mb-4">¿Por qué elegir terapia de pareja online?</h2>
              <p className="text-paragraph">
                La terapia de pareja online ofrece una solución conveniente para parejas que desean mejorar su relación pero tienen dificultades para asistir a sesiones presenciales. Ya sea por horarios ocupados, distancia o simplemente por preferencia, la terapia online es una excelente opción para resolver problemas de pareja desde cualquier lugar.
              </p>

              {/* Preguntas Frecuentes */}
              <h2 className="text-h2 mt-6 mb-4">Preguntas Frecuentes sobre Terapia de Pareja Online</h2>
              <FAQAccordion
                title="Resolviendo tus dudas"
                description="Aquí respondemos a las preguntas más comunes sobre la terapia de pareja online. Si tienes más consultas, no dudes en contactarme."
                faqs={faqs}
              />
            </>
          }
        />
      </section>
    </Layout>
  );
}