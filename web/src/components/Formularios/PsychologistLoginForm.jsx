import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PsychoRegisterForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage(""); // Resetear el mensaje de error

    try {
      // Enviar los datos del formulario a la API
      await axios.post("http://localhost:3000/api/users/register", data);
      alert("Registro exitoso!");
      reset(); // Limpiar el formulario
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage("Hubo un error al registrar el usuario. Intenta nuevamente.");
      console.error("Error al registrar el usuario: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-center text-purple-600 mb-6">Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Nombre completo</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="Tu nombre completo"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          {/* Campo: Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="Tu correo electrónico"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Por favor ingresa un correo electrónico válido",
                }
              })}
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Campo: Contraseña */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              placeholder="Tu contraseña"
              {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Campo: Tipo de cuenta */}
          <div>
            <label htmlFor="role" className="block text-gray-700 font-medium">Tipo de cuenta</label>
            <select
              id="role"
              name="role"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              {...register("role", { required: "El tipo de cuenta es obligatorio" })}
            >
              <option value="reader">Lector</option>
              <option value="patient">Paciente</option>
              <option value="psychologist">Psicólogo</option>
            </select>
            {errors.role && <p className="text-red-600">{errors.role.message}</p>}
          </div>

          {/* Botón de envío */}
          <div>
            <button
              type="submit"
              disabled={loading || Object.keys(errors).length > 0}
              className="w-full p-3 mt-4 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 disabled:bg-gray-400"
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
          </div>
        </form>

        {/* Error message */}
        {errorMessage && <p className="text-center text-red-600 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default PsychoRegisterForm;