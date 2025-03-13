import React from "react";
import BlogPost from "../../components/blog/BlogPost"; 
import TwoColumns from "../../components/inpage/TwoColumns/TwoColumns";
import TextBlock from "../../components/inpage/SectionText/TextBlock";
import HighlightPoints from "../../components/inpage/Highlights/Highlights";
import FAQAccordion from "../../components/faq/FAQ"; 
import Layout from "../../components/PageLayout";

export default function TerapiaInfantilPost() {
  const points = [
    {
      title: "Mejora de habilidades sociales",
      description:
        "Ayudamos a los niños a desarrollar herramientas para interactuar de manera efectiva con sus compañeros y adultos.",
    },
    {
      title: "Manejo de emociones",
      description:
        "Apoyamos a los pequeños en el reconocimiento y la regulación de sus emociones para enfrentar los desafíos cotidianos.",
    },
    {
      title: "Fortalecimiento de la autoestima",
      description:
        "Fomentamos una autoimagen positiva para que los niños se sientan seguros y confiados en sus capacidades.",
    },
  ];

  const faqs = [
    {
      question: "¿Qué edad es adecuada para iniciar la terapia infantil?",
      answer:
        "La terapia infantil puede comenzar desde los 4 años, dependiendo de las necesidades específicas del niño y la situación familiar.",
    },
    {
      question: "¿Qué incluye una sesión de terapia infantil?",
      answer:
        "Las sesiones suelen incluir actividades lúdicas, ejercicios de expresión emocional y, en algunos casos, la participación de los padres.",
    },
    {
      question: "¿Cómo puedo saber si mi hijo necesita terapia?",
      answer:
        "Si notas cambios significativos en el comportamiento de tu hijo, dificultades para gestionar emociones o problemas en la escuela, podría beneficiarse de la terapia.",
    },
    {
      question: "¿Los padres participan en las sesiones?",
      answer:
        "Sí, en muchos casos los padres participan activamente para fortalecer la relación con su hijo y mejorar la dinámica familiar.",
    },
    {
      question: "¿Cuánto tiempo suele durar el proceso terapéutico?",
      answer:
        "La duración varía según las necesidades del niño. Algunos procesos son breves (6-12 sesiones), mientras que otros requieren un acompañamiento más prolongado.",
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <BlogPost
          title="Terapia Infantil: Apoyo Emocional para los Más Pequeños"
          date="22 de enero de 2025"
          author="Blanca de Uña Martín"
          imageSrc="/images/terapia-infantil.jpg"
          tags={["terapia infantil", "psicología", "bienestar"]}
          content={
            <>
              {/* Introducción */}
              <TextBlock 
                title="Creando un espacio seguro para los niños"
                subtitle="El apoyo emocional que tu hijo necesita"
                text="La terapia infantil es un espacio donde los niños pueden explorar y expresar sus emociones en un entorno seguro y de confianza. A través de actividades adaptadas a su edad, les ayudamos a superar desafíos y a desarrollar habilidades emocionales y sociales esenciales."
              />

              {/* Sección 1 */}
              <h2 className="text-h2 mt-6 mb-4">¿Qué es la Terapia Infantil?</h2>
              <TwoColumns
                imageSrc="/images/terapia-infantil-juegos.jpg"
                altText="Niño jugando en una sesión de terapia"
                title="Un enfoque lúdico y profesional"
                text="La terapia infantil utiliza métodos como el juego, el arte y la narración para que los niños puedan expresar lo que sienten y piensan. Este enfoque permite abordar problemas emocionales o de comportamiento de manera efectiva y respetuosa."
              />

              {/* Sección 2 */}
              <h2 className="text-h2 mt-6 mb-4">¿Cómo beneficia la terapia a los niños?</h2>
              <HighlightPoints
                title="Principales beneficios de la Terapia Infantil"
                points={points}
              />

              {/* Sección 3 */}
              <h2 className="text-h2 mt-6 mb-4">¿Cómo saber si mi hijo necesita terapia?</h2>
              <p className="text-paragraph">
                Si has notado que tu hijo muestra cambios de comportamiento, problemas en la escuela, dificultad para relacionarse con otros niños o signos de tristeza prolongada, la terapia infantil puede ser una herramienta efectiva para ayudarlo a superar estos desafíos.
              </p>
              <p className="text-paragraph">
                Este espacio está diseñado para brindarles el apoyo que necesitan mientras tú, como padre, también obtienes orientación para reforzar su bienestar emocional en casa.
              </p>

              {/* Preguntas Frecuentes */}
              <h2 className="text-h2 mt-6 mb-4">Preguntas Frecuentes sobre Terapia Infantil</h2>
              <FAQAccordion
                title="Resolviendo tus dudas"
                description="Estas son algunas de las preguntas más comunes sobre la terapia infantil. Si tienes otras inquietudes, no dudes en contactarme."
                faqs={faqs}
              />
            </>
          }
        />
      </section>
    </Layout>
  );
}
