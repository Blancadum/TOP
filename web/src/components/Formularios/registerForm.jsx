import React from "react";

const RegisterForm = ({
  formData,
  handleChange,
  handleSubmit,
  error,
  loading,
}) => {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-brandPurple text-center">Registro</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">Nombre completo</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Tu correo electrónico"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-2">Contraseña</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Tu contraseña"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: Rol (Paciente o Psicólogo) */}
          <div>
            <label htmlFor="role" className="block text-gray-600 mb-2">Tipo de cuenta</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="patient">Paciente</option>
              <option value="psychologist">Psicólogo</option>
            </select>
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading || !formData.name || !formData.email || !formData.password || !formData.role}
              className={`px-6 py-3 font-semibold rounded-full transition ${loading ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-brandPurple text-white hover:bg-brandPurple-dark"}`}
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;