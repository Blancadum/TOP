import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";  // Asegúrate de importar axios

const RegisterForm = ({ loading }) => {  // Elimina `error` porque ya no lo usamos
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(""); // Añadimos el estado para el error

  const onSubmit = async (data) => {
    try {
      // Enviar los datos de registro a la API
      await axios.post("http://localhost:3000/api/users/register", data);
      alert("Usuario registrado con éxito!");
      reset(); // Limpiar el formulario después de un registro exitoso
    } catch (err) {
      console.error("Error al registrar el usuario: ", err);
      setErrorMessage("Hubo un error al registrar el usuario. Intenta nuevamente.");
    }
  };

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Nombre completo
            </label>
            <input
              id="name"
              type="text"
              placeholder="Tu nombre completo"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Por favor ingresa un correo electrónico válido",
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Campo: Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Tu contraseña"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Campo: Tipo de cuenta */}
          <div>
            <label htmlFor="role" className="block text-gray-600 mb-2">
              Tipo de cuenta
            </label>
            <select
              id="role"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              {...register("role", { required: "El tipo de cuenta es obligatorio" })}
            >
              <option value="reader">Lector</option>
              <option value="patient">Paciente</option>
              <option value="psychologist">Psicólogo</option>
            </select>
            {errors.role && <p className="text-red-500">{errors.role.message}</p>}
          </div>

          {/* Botón de envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading || Object.keys(errors).length > 0}
              className={`px-6 py-3 font-semibold rounded-full transition ${
                loading ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-brandPurple text-white hover:bg-brandPurple-dark"
              }`}
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </div>
        </form>

        {/* Error message */}
        {errorMessage && <p className="text-red-500 mt-4 text-center">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default RegisterForm;