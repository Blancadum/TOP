import React from "react";
import BlogPost from "@/components/blog/BlogPost"; 
import TwoColumns from "@/components/inpage/TwoColumns/TwoColumns";
import TextBlock from "@/components/inpage/SectionText/TextBlock";
import HighlightPoints from "@/components/inpage/Highlights/Highlights";
import Layout from "@/components/layout";

export default function CoachingBariatricoPost() {
  const points = [
    {
      title: "Preparación emocional",
      description:
        "La cirugía puede generar emociones como miedo, entusiasmo o incertidumbre. El coaching te ayuda a identificarlas y gestionarlas para que te sientas preparado emocionalmente.",
    },
    {
      title: "Cambios en la relación con la comida",
      description:
        "Una relación sana con la comida es clave para el éxito postoperatorio. El coaching te brinda herramientas para reconocer patrones emocionales y desarrollar hábitos alimenticios conscientes.",
    },
    {
      title: "Adaptación al cambio",
      description:
        "Después de la cirugía, tu cuerpo y tu estilo de vida cambiarán significativamente. El coaching te acompaña para entender estos cambios y diseñar estrategias que faciliten tu adaptación.",
    },
  ];

  return (
    <Layout>
      <section className="container mx-auto bg-white py-section px-6 md:px-12 lg:px-16">
        <BlogPost
          title="Coaching para Bariátric@s"
          date="20 de enero de 2025"
          author="Blanca de Uña Martín"
          imageSrc="/images/coaching-bariatrico.jpg"
          tags={["coaching", "bariátrico", "bienestar", "psicología"]}
          content={
            <>
              {/* Introducción */}
              <TextBlock 
                title="Te operan el estómago, pero no la cabeza"
                subtitle="Tu vida cambiará, y debes prepararte para adaptarte"
                text="La cirugía bariátrica no es solo un procedimiento físico; implica un cambio de vida completo que requiere preparación emocional y mental para garantizar resultados sostenibles. Descubre cómo el coaching bariátrico puede apoyarte en cada paso del camino, ayudándote a enfrentar los desafíos con confianza."
              />

              {/* Sección 1 */}
              <h2 className="text-h2 mt-6 mb-4">¿Qué es el Coaching Bariátrico?</h2>
              <TwoColumns
                imageSrc="/images/ejemplo1.jpg"
                altText="Representación del coaching bariátrico"
                title="Un enfoque integral para tu bienestar"
                text="El coaching bariátrico es un programa diseñado para brindar apoyo antes, durante y después de una cirugía bariátrica. Combina estrategias psicológicas, emocionales y conductuales para ayudarte a enfrentar los desafíos que acompañan este cambio transformador."
                reverse={true}
              />

              {/* Sección 2 */}
              <h2 className="text-h2 mt-6 mb-4">¿Por qué es esencial el coaching después de una cirugía de obesidad?</h2>
              <HighlightPoints
                title="Beneficios del Coaching Bariátrico"
                points={points}
              />

              {/* Sección 3 */}
              <h2 className="text-h2 mt-6 mb-4">Conclusión</h2>
              <p className="text-paragraph">
                El coaching bariátrico no solo facilita tu transformación física, sino que también refuerza tu bienestar emocional y mental. Con un acompañamiento adecuado, puedes construir una relación más saludable contigo mismo y con tu entorno.
              </p>
              <p className="text-paragraph">
                Te lo dice alguien que hubiera agradecido tener este tipo de apoyo psicológico durante su proceso de manga gástrica. Porque los psicólogos también somos humanos, y sabemos lo valioso que es tener a alguien que entienda lo que estás pasando y tenga las herramientas para ayudarte a superarlo.
              </p>
            </>
          }
        />
      </section>
    </Layout>
  );
}
