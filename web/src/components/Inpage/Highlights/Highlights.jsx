import React from "react";

export default function HighlightPoints({ title, points }) {
  return (
    <section className="w-full md:w-[80%] lg:w-[70%] mx-auto px-4 py-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl shadow-lg border-l-4 border-indigo-100">
      {title && (
        <h2 className="text-xl md:text-xl font-semibold text-black mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="space-y-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 bg-white bg-opacity-90 p-5 rounded-xl shadow-xl transition hover:shadow-sm"
            role="listitem"
          >
            <div
              className="flex-shrink-0 bg-indigo-100 text-indigo-700 rounded-full h-8 w-8 flex items-center justify-center transition hover:bg-indigo-400 hover:text-white"
            >
              {index + 1}
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {point.title}
              </h3>
              <p className="text-sm text-gray-800">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
