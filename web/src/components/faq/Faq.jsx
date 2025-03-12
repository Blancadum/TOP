import React, { useState } from "react";
import { faqsData } from "../../data/FaqsData";
  

export default function FAQAccordion({ title }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
      {title && <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>}

      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={faq.id} // clave clara, única
            className="faq-item bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden"
          >
            <h3 className="text-lg font-semibold">
              <button
                onClick={() => toggleFaq(index)}
                className="faq-question flex items-center justify-between w-full px-4 py-3 text-left
                           text-brandPurple font-semibold cursor-pointer focus:outline-none hover:bg-gray-50 transition-all"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <span className="text-3xl font-bold text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
            </h3>

            {openIndex === index && (
              <div
                className="faq-answer px-4 pb-4 text-gray-600 leading-relaxed transition-all duration-300"
                aria-hidden={openIndex !== index}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
