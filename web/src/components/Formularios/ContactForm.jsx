import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Definir esquema de validación con Yup
const schema = yup.object().shape({
  name: yup.string().min(3, "El nombre debe tener al menos 3 caracteres").required("El nombre es obligatorio"),
  email: yup.string().email("Correo electrónico inválido").required("El correo es obligatorio"),
  telefono: yup
    .string()
    .matches(/^[0-9]{9,15}$/, "El teléfono debe contener entre 9 y 15 dígitos numéricos")
    .required("El teléfono es obligatorio"),
  motivoConsulta: yup.string().min(10, "Debe tener al menos 10 caracteres").required("El motivo es obligatorio"),
});

const ContactForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // Validación cuando el usuario sale del input
  });

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-brandPurple text-center">
          Formulario de Contacto
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Campo Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">Nombre</label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Campo Correo Electrónico */}
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">Correo Electrónico</label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Campo Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-gray-600 mb-2">Teléfono</label>
            <input
              id="telefono"
              type="tel"
              {...register("telefono")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
            {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
          </div>

          {/* Campo Motivo de la Consulta */}
          <div>
            <label htmlFor="motivoConsulta" className="block text-gray-600 mb-2">Motivo de la Consulta</label>
            <textarea
              id="motivoConsulta"
              {...register("motivoConsulta")}
              className="w-full border border-gray-300 rounded-md px-4 py-2 h-20 resize-none focus:ring-2 focus:ring-brandPurple focus:outline-none"
            />
            {errors.motivoConsulta && <p className="text-red-500 text-sm">{errors.motivoConsulta.message}</p>}
          </div>

          {/* Botón de Envío */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!isValid}
              className={`px-6 py-3 font-semibold rounded-full transition ${
                isValid
                  ? "bg-brandPurple text-white hover:bg-brandPurple-dark"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
