import React from "react";
import BlogPost from "../Blog"
import Layout from "../../components/PageLayout";
/*import TwoColumns from "../../components/inpage/TwoColumns/TwoColumns";
import TextBlock from "../../components/inpage/SectionText/TextBlock";
import HighlightPoints from "../../components/inpage/Highlights/Highlights";
*/

export default function OrientacionEscolarPost() {
  return (
    <BlogPost
      title="Orientación Escolar: Clave para el Éxito Académico y Emocional"
      date="25 de enero de 2025"
      author="Blanca de Uña Martín"
      imageSrc="/images/orientacion-escolar.jpg"
      tags={["psicología", "educación", "orientación"]}
      content={
        <>
          {/* Introducción */}
          <p>
            La orientación escolar es una herramienta esencial para guiar a niños y adolescentes
            en su desarrollo académico, emocional y social. Este proceso no solo se enfoca en
            mejorar el rendimiento académico, sino también en ayudar a los estudiantes a
            encontrar su propósito y fortalecer su bienestar integral.
          </p>

          {/* Sección 1 */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            ¿Qué es la orientación escolar?
          </h2>
          <p>
            La orientación escolar es un servicio que combina estrategias psicológicas y
            pedagógicas para apoyar a los estudiantes en sus trayectorias educativas. Desde
            ayudar a elegir una carrera profesional hasta resolver conflictos emocionales
            derivados del entorno escolar, este enfoque abarca una amplia variedad de áreas.
          </p>

          {/* Sección 2 */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            Beneficios de la orientación escolar
          </h2>

          {/* Subtítulo 2.1 */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
            1. Elección de carrera y vocación
          </h3>
          <p>
            Proporciona a los estudiantes las herramientas necesarias para descubrir sus
            intereses, habilidades y valores, ayudándoles a tomar decisiones informadas sobre
            su futuro académico y profesional.
          </p>

          {/* Subtítulo 2.2 */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
            2. Resolución de conflictos escolares
          </h3>
          <p>
            La orientación escolar aborda problemas como el acoso escolar, dificultades
            académicas o problemas de adaptación, ofreciendo soluciones prácticas y apoyo
            emocional.
          </p>

          {/* Subtítulo 2.3 */}
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">
            3. Mejora del rendimiento académico
          </h3>
          <p>
            Ayuda a los estudiantes a desarrollar rutinas de estudio efectivas, técnicas de
            organización y estrategias de manejo del tiempo para maximizar su potencial.
          </p>

          {/* Sección 3 */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            Estrategias de orientación escolar
          </h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Talleres vocacionales para descubrir intereses y aptitudes.</li>
            <li className="mb-2">Asesoría personalizada en manejo de estrés y ansiedad.</li>
            <li className="mb-2">Evaluaciones psicopedagógicas para identificar necesidades específicas.</li>
            <li className="mb-2">Sesiones de mediación para resolver conflictos entre compañeros.</li>
          </ul>

          {/* Sección 4 */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            ¿Cómo apoyar a los estudiantes desde casa?
          </h2>
          <p>
            Los padres y cuidadores desempeñan un papel fundamental en el éxito académico y
            emocional de los estudiantes. Fomentar la comunicación abierta, apoyar en la
            planificación del tiempo y estar atentos a señales de estrés o desmotivación son
            acciones clave para acompañar a los jóvenes en su camino.
          </p>

          {/* Conclusión */}
          <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">
            Conclusión
          </h2>
          <p>
            La orientación escolar no solo facilita el éxito académico, sino que también promueve
            el desarrollo integral de los estudiantes. Si necesitas apoyo para tu hijo o para ti
            mismo en esta etapa educativa, no dudes en buscar orientación profesional que se
            adapte a tus necesidades.
          </p>
        </>
      }
    />
  );
}
