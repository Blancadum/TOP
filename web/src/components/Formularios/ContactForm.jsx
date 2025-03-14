import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit, error, success }) => {
  const isFormValid = formData.name && formData.email && formData.telefono && formData.motivoConsulta;

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-brandPurple text-center">
          Formulario de Contacto
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Campo Nombre */}
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
              aria-required="true"
              aria-label="Nombre"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo Correo Electrónico */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Correo Electrónico"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-gray-600 mb-2">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Teléfono"
              pattern="[0-9]{9,15}" // Validación básica para números de teléfono
              title="Debe contener entre 9 y 15 números"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo Motivo de la Consulta */}
          <div>
            <label htmlFor="motivoConsulta" className="block text-gray-600 mb-2">
              Motivo de la Consulta
            </label>
            <textarea
              id="motivoConsulta"
              name="motivoConsulta"
              value={formData.motivoConsulta}
              onChange={handleChange}
              required
              aria-required="true"
              aria-label="Motivo de la Consulta"
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-20 resize-none focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Botón de Envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isFormValid} 
              className={`px-6 py-3 font-semibold rounded-full transition ${
                isFormValid
                  ? "bg-brandPurple text-white hover:bg-brandPurple-dark"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Enviar
            </button>
          </div>
        </form>

        {/* Mostrar mensajes de éxito o error */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
