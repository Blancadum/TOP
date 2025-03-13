import React from "react";
import { useLocation, Link } from "react-router-dom"; // Sustituye useRouter y href

export default function CTABanner({
  showTitle = true,
  showSubtitle = true,
  showContactButton = true,
  showPricingButton = false,
  title = "¿Buscas ayuda personalizada?",
  subtitle = "Escríbenos para resolver tus dudas o reservar una sesión enfocada en tus necesidades específicas. Demos el paso hacia tu bienestar emocional.",
  contactButtonText = "¡Contáctanos!",
  contactButtonLink = "/contacto",
  pricingButtonText = "Ver Tarifas",
  pricingButtonLink = "/tarifas",
}) {
  const location = useLocation(); // Equivalente a useRouter para obtener la ruta actual
  const isPricingPage = location.pathname === "/tarifas";

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {showTitle && (
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
            {title}
          </h2>
        )}

        {showSubtitle && (
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        )}

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {showContactButton && (
            <Link
              to={contactButtonLink}
              aria-label="Contacta para más información"
              className="inline-block px-6 py-3 bg-gradient-to-r from-brandPurple to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition"
            >
              {contactButtonText}
            </Link>
          )}
          {!isPricingPage && showPricingButton && (
            <Link
              to={pricingButtonLink}
              aria-label="Ver tarifas disponibles"
              className="inline-block px-6 py-3 border-2 border-brandPurple text-brandPurple font-semibold rounded-full shadow-md hover:bg-gradient-to-r hover:from-brandPurple hover:to-pink-500 hover:text-white transition"
            >
              {pricingButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
