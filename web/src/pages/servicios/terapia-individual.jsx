import React from "react";
import BlogPost from "@/components/blog/BlogPost"; 
import TwoColumns from "@/components/inpage/TwoColumns/TwoColumns";
import TextBlock from "@/components/inpage/SectionText/TextBlock";
import HighlightPoints from "@/components/inpage/Highlights/Highlights";
import FAQAccordion from "@/components/faq/faq"; // Componente de Preguntas Frecuentes
import Layout from "@/components/layout";

export default function TerapiaIndividualPost() {
  const points = [
    {
      title: "Gestión emocional",
      description:
        "Aprende a identificar y regular tus emociones para enfrentar los desafíos diarios con mayor calma y claridad.",
    },
    {
      title: "Resolución de conflictos internos",
      description:
        "Trabaja en superar bloqueos emocionales y patrones de pensamiento que te impiden avanzar.",
    },
    {
      title: "Fomento de la autoestima",
      description:
        "Construye una imagen personal más positiva y fortalece tu confianza en ti mismo.",
    },
  ];

  const faqs = [
    {
      question: "¿Cuánto dura una sesión de terapia individual?",
      answer:
        "Las sesiones suelen durar entre 45 y 60 minutos, dependiendo de tus necesidades y preferencias.",
    },
    {
      question: "¿Con qué frecuencia se realizan las sesiones?",
      answer:
        "La frecuencia se acuerda según tus necesidades, pero normalmente se recomienda una sesión semanal.",
    },
    {
      question: "¿Es confidencial lo que hablo en la terapia?",
      answer:
        "Sí, todas las sesiones son completamente confidenciales, cumpliendo con los estándares éticos y legales.",
    },
    {
      question: "¿Qué necesito para empezar la terapia individual?",
      answer:
        "Solo necesitas un espacio tranquilo para hablar abiertamente y la disposición de trabajar en ti mismo.",
    },
    {
      question: "¿Cuánto tiempo dura un proceso de terapia?",
      answer:
        "La duración varía según los objetivos y necesidades de cada persona. Algunas personas logran cambios significativos en pocas semanas, mientras que otras optan por un proceso más largo.",
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <BlogPost
          title="Terapia Individual: Un Camino hacia el Bienestar Personal"
          date="22 de enero de 2025"
          author="Blanca de Uña Martín"
          imageSrc="/images/terapia-individual.jpg"
          tags={["terapia", "bienestar", "psicología"]}
          content={
            <>
              {/* Introducción */}
              <TextBlock 
                title="Un espacio seguro para ti"
                subtitle="Descubre el poder de la terapia individual"
                text="La terapia individual es un espacio confidencial y seguro donde podrás explorar tus pensamientos, emociones y conductas con el apoyo de un profesional. Este proceso te ayudará a desarrollar habilidades para superar los desafíos emocionales y alcanzar un bienestar integral."
              />

              {/* Sección 1 */}
              <h2 className="text-h2 mt-6 mb-4">¿Qué es la Terapia Individual?</h2>
              <TwoColumns
                imageSrc="/images/terapia-individual-proceso.jpg"
                altText="Persona reflexionando durante una sesión de terapia individual"
                title="Un enfoque personalizado para tu bienestar"
                text="La terapia individual se centra en tus necesidades específicas. Juntos trabajaremos para identificar las áreas de mejora en tu vida y diseñar un plan de acción adaptado a tus metas personales."
              />

              {/* Sección 2 */}
              <h2 className="text-h2 mt-6 mb-4">¿Cómo te puede ayudar la Terapia Individual?</h2>
              <HighlightPoints
                title="Beneficios de la Terapia Individual"
                points={points}
              />

              {/* Sección 3 */}
              <h2 className="text-h2 mt-6 mb-4">¿Es la Terapia Individual para mí?</h2>
              <p className="text-paragraph">
                La terapia individual es adecuada para cualquier persona que desee comprenderse mejor, superar conflictos emocionales o desarrollar nuevas herramientas para enfrentar los retos de la vida. Ya sea que estés experimentando ansiedad, estrés, depresión o simplemente quieras crecer personalmente, este espacio está diseñado para ti.
              </p>
              <p className="text-paragraph">
                No importa cuán pequeño o grande sea el desafío que enfrentas; cada paso hacia el bienestar es valioso. Si estás listo para empezar este camino, estoy aquí para acompañarte.
              </p>

              {/* Preguntas Frecuentes */}
              <h2 className="text-h2 mt-6 mb-4">Preguntas Frecuentes sobre Terapia Individual</h2>
              <FAQAccordion
                title="Resolviendo tus dudas"
                description="Estas son algunas de las preguntas más comunes sobre la terapia individual. Si tienes otras inquietudes, no dudes en contactarme."
                faqs={faqs}
              />
            </>
          }
        />
      </section>
    </Layout>
  );
}
