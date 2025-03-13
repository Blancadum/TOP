import React from "react";

const LoginForm = ({ formData, handleChange, handleSubmit, error }) => {
  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-h2 font-bold mb-6 text-brandPurple text-center text-gradient">
          Iniciar Sesión
        </h2>
        <p className="text-paragraph text-center mb-4">
          Accede a tu cuenta para continuar.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo: Email */}
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
              placeholder="Tu correo electrónico"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Campo: Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Tu contraseña"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
          </div>

          {/* Mostrar error si ocurre */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-brandPurple to-brandPink text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
