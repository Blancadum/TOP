import React, { useState } from "react";

export default function FAQAccordion({ title, description, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full md:w-[80%] lg:w-[70%] mx-auto my-12 px-6 py-10 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl shadow-lg border-l-4 border-indigo-100">
      {title && (
        <h2 className="text-xl md:text-2xl font-semibold text-black mb-6 text-center">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div className="space-y-4">
        {faqs && faqs.length > 0 && faqs.map((faq, index) => (
          <div key={index} className="bg-white bg-opacity-90 p-4 rounded-xl shadow transition hover:shadow-md">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left text-indigo-700 font-medium transition hover:text-indigo-900"
            >
              <span>{faq.question}</span>
              <span className="text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-3 text-sm text-gray-800 transition">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
