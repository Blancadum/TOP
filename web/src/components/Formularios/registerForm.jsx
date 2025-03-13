import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    dni: "",
    birthdate: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Enviar los datos al backend
      const response = await fetch("http://localhost:4000/api/register", {  // Asegúrate de que la URL sea la correcta
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registro exitoso");
        setFormData({
          name: "",
          surname: "",
          phone: "",
          dni: "",
          birthdate: "",
          email: "",
          password: "",
        });
      } else {
        setError(data.message || "Hubo un error con el registro.");
      }
    } catch (error) {
      setError("Error de conexión con el servidor");
    }

    setLoading(false);
  };

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-h2 font-bold mb-6 text-brandPurple text-center">Registro</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: Apellido */}
          <div>
            <label htmlFor="surname" className="block text-gray-600 mb-2">Apellido</label>
            <input
              id="surname"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              placeholder="Tu apellido"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-gray-600 mb-2">Teléfono</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Tu número de teléfono"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: DNI */}
          <div>
            <label htmlFor="dni" className="block text-gray-600 mb-2">DNI</label>
            <input
              id="dni"
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
              placeholder="Tu DNI"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Campo: Fecha de nacimiento */}
          <div>
            <label htmlFor="birthdate" className="block text-gray-600 mb-2">Fecha de nacimiento</label>
            <input
              id="birthdate"
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
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

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-brandPurple text-white font-semibold rounded-full"
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
