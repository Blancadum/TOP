import React from "react";

const ContactForm = ({ formData, handleChange, setError, setSuccess }) => {
  // Manejo del envío del formulario
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario.");
      }

      console.log("Formulario enviado correctamente.");
      setSuccess("Formulario enviado correctamente.");
    } catch (err) {
      setError("Error al enviar el formulario.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-h2 font-bold mb-6 text-brandPurple text-center">
          Formulario de Contacto
        </h2>
        <form onSubmit={handleContactSubmit} className="space-y-6">
          {/* Campos del formulario */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="motivoConsulta" className="block text-gray-600 mb-2">
              Motivo de la consulta
            </label>
            <input
              id="motivoConsulta"
              type="text"
              name="motivoConsulta"
              value={formData.motivoConsulta}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-brandPurple text-white font-semibold rounded-full">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
