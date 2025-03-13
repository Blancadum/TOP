import React from "react";
import BlogPost from "../../components/blog/BlogPost";
import TwoColumns from "../../components/inpage/TwoColumns/TwoColumns";
import TextBlock from "../../components/inpage/SectionText/TextBlock";
import HighlightPoints from "../../components/inpage/Highlights/Highlights";
import FAQAccordion from "../../components/faq/FAQ";
import Layout from "../../components/PageLayout";
export default function TerapiaOnlinePost() {
  const points = [
    {
      title: "Acceso desde cualquier lugar",
      description:
        "No importa dónde estés, puedes recibir apoyo psicológico desde la comodidad de tu hogar.",
    },
    {
      title: "Flexibilidad de horarios",
      description:
        "La terapia online te permite elegir horarios que se adapten a tu rutina diaria.",
    },
    {
      title: "Confidencialidad asegurada",
      description:
        "Plataformas seguras garantizan que tus sesiones sean privadas y protegidas.",
    },
  ];

  const faqs = [
    {
      question: "¿Es igual de efectiva que la terapia presencial?",
      answer:
        "Sí, numerosos estudios han demostrado que la terapia online puede ser tan efectiva como la presencial, siempre que se realice con profesionales cualificados.",
    },
    {
      question: "¿Qué equipo necesito para realizar una sesión?",
      answer:
        "Solo necesitas un dispositivo con cámara y micrófono, como un ordenador, tablet o smartphone, y una conexión a internet estable.",
    },
    {
      question: "¿Es segura la terapia online?",
      answer:
        "Sí, se utilizan plataformas encriptadas para garantizar la privacidad y confidencialidad de las sesiones.",
    },
    {
      question: "¿Qué problemas se pueden tratar en terapia online?",
      answer:
        "Ansiedad, depresión, estrés, problemas de pareja, entre otros. La mayoría de los problemas emocionales se pueden abordar eficazmente online.",
    },
    {
      question: "¿Puedo combinar terapia online y presencial?",
      answer:
        "Sí, muchas personas optan por un enfoque híbrido, dependiendo de sus necesidades y circunstancias.",
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <BlogPost
          title="Terapia Online: Accesible y Eficaz"
          date="22 de enero de 2025"
          author="Blanca de Uña Martín"
          imageSrc="/images/terapia-online.jpg"
          tags={["terapia online", "psicología", "bienestar"]}
          content={
            <>
              {/* Introducción */}
              <TextBlock 
                title="Tu bienestar, a un clic de distancia"
                subtitle="La terapia online se adapta a tu vida"
                text="La terapia online es una forma moderna y eficaz de recibir apoyo psicológico desde cualquier lugar. A través de videollamadas seguras y cómodas, puedes trabajar en tu bienestar emocional sin necesidad de desplazarte."
              />

              {/* Sección 1 */}
              <h2 className="text-h2 mt-6 mb-4">¿Qué es la Terapia Online?</h2>
              <TwoColumns
                imageSrc="/images/terapia-online-beneficios.jpg"
                altText="Persona en una sesión de terapia online"
                title="Conexión emocional en el mundo digital"
                text="La terapia online utiliza herramientas digitales como videollamadas y chats para ofrecer sesiones de apoyo psicológico. Es ideal para quienes buscan flexibilidad y comodidad sin comprometer la calidad del tratamiento."
              />

              {/* Sección 2 */}
              <h2 className="text-h2 mt-6 mb-4">Ventajas de la Terapia Online</h2>
              <HighlightPoints
                title="Beneficios principales"
                points={points}
              />

              {/* Sección 3 */}
              <h2 className="text-h2 mt-6 mb-4">¿Por qué elegir terapia online?</h2>
              <p className="text-paragraph">
                La terapia online no solo elimina barreras geográficas, sino que también ofrece una solución flexible para quienes tienen agendas ocupadas o viven en áreas con acceso limitado a profesionales de la salud mental. Es una manera eficaz y moderna de priorizar tu bienestar.
              </p>

              {/* Preguntas Frecuentes */}
              <h2 className="text-h2 mt-6 mb-4">Preguntas Frecuentes sobre Terapia Online</h2>
              <FAQAccordion
                title="Resolviendo tus dudas"
                description="Aquí respondemos a las preguntas más comunes sobre la terapia online. Si tienes más consultas, no dudes en contactarme."
                faqs={faqs}
              />
            </>
          }
        />
      </section>
    </Layout>
  );
}
