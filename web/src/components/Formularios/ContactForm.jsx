import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit, error, success }) => {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-brandPurple text-center">
          Formulario de Contacto
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campos del formulario */}
          
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
              className="w-full border border-gray-300 rounded-md px-4 py-2"
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
              className="w-full border border-gray-300 rounded-md px-4 py-2"
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
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo Motivo de la Consulta */}
          <div>
            <label htmlFor="motivoConsulta" className="block text-gray-600 mb-2">
              Motivo de la Consulta
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

          {/* Botón de Envío */}
          <div className="flex justify-center">
            <button type="submit" className="px-6 py-3 bg-brandPurple text-white font-semibold rounded-full">
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