import React from "react";
import { useLocation, Link } from "react-router-dom";

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
  const location = useLocation();
  const isPricingPage = location.pathname === "/tarifas";

  return (
    <section className="w-full md:w-[80%] lg:w-[70%] mx-auto my-12 px-6 py-10 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl shadow-lg border-l-4 border-indigo-100 text-center">
      {showTitle && (
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-4">
          {title}
        </h2>
      )}

      {showSubtitle && (
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      <div className="flex justify-center gap-4 flex-wrap">
        {showContactButton && (
          <Link
            to={contactButtonLink}
            className="inline-block px-6 py-3 bg-indigo-100 text-indigo-700 font-semibold rounded-full shadow-md transition hover:bg-indigo-400 hover:text-white"
          >
            {contactButtonText}
          </Link>
        )}

        {!isPricingPage && showPricingButton && (
          <Link
            to={pricingButtonLink}
            className="inline-block px-6 py-3 border-2 border-indigo-300 text-indigo-700 font-semibold rounded-full shadow-md transition hover:bg-indigo-400 hover:text-white"
          >
            {pricingButtonText}
          </Link>
        )}
      </div>
    </section>
  );
}