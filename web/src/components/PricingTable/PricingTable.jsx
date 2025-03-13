import React from "react";
import CTABanner from "../CTA-Button/CtaBanner";

// Componente de tabla comparativa con precios y botones "Comprar"
export default function PricingTable() {
  const plans = [
    {
      title: "1 Sesión",
      price: "€50",
      description: "Ideal para problemas específicos.",
      isHighlighted: false,
    },
    {
      title: "Pack 3 Sesiones",
      price: "135€",
      description: "Ahorro de $15 en sesiones consecutivas.",
      isHighlighted: false,
    },
    {
      title: "Pack 5 Sesiones",
      price: "€200",
      description: "Máximo ahorro para un tratamiento continuo.",
      isHighlighted: true, 
    },
  ];

  return (
    <section className="container mx-auto py-section px-6 md:px-12 lg:px-16 animate-fadeInUp">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border rounded-md shadow-sm hover:shadow-md transition duration-300 relative ${
              plan.isHighlighted
                ? "bg-gray-50 border-2 border-brandPurple"
                : ""
            }`}
          >
            {/* Etiqueta de destacado */}
            {plan.isHighlighted && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                Mejor Ahorro
              </span>
            )}

            <h3 className="text-lg md:text-xl font-bold text-brandPurple text-center mb-4">
              {plan.title}
            </h3>
            <p className="text-gray-600 text-center text-base md:text-lg font-semibold mb-4">
              {plan.price}
            </p>
            <p className="text-gray-500 text-center text-sm md:text-base mb-6">
              {plan.description}
            </p>
            <div className="flex justify-center">
              <button
                className="px-6 py-2 border-2 border-gradient-to-r from-brandPurple to-pink-500 text-brandPurple font-semibold rounded-full transition hover:bg-gradient-to-r hover:text-white focus:outline-none focus:ring-2 focus:ring-brandPurple focus:ring-offset-2"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <CTABanner
        showTitle={true}
        showSubtitle={true}
        showContactButton={true}
        showPricingButton={false}
      />
    </section>
  );
}
