import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Esquema de validación con Yup
const schema = yup.object().shape({
  name: yup.string().min(3, "El nombre debe tener al menos 3 caracteres").required("El nombre es obligatorio"),
  email: yup.string().email("Correo electrónico inválido").required("El correo es obligatorio"),
  phone: yup
    .string()
    .matches(/^[0-9]{9,15}$/, "El teléfono debe contener entre 9 y 15 dígitos numéricos")
    .required("El teléfono es obligatorio"),
  reason: yup
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("El motivo es obligatorio"),
});

const ContactForm = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // Validación en tiempo real
  });

  // Estado para mantener el botón siempre visible y actualizar su estado de activación
  const [canSubmit, setCanSubmit] = useState(false);

  // Observar los campos para actualizar el estado en tiempo real
  const watchFields = watch();

  useEffect(() => {
    setCanSubmit(isValid); // Se actualiza cuando cambia la validez del formulario
  }, [watchFields, isValid]);

  return (
    <div className="section">
      <div className="max-w-lg mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-brandPurple text-center">Formulario de Contacto</h2>

        <form onSubmit={handleSubmit((data) => onSubmit(data, reset))} className="space-y-6">
          
          {/* Campo Nombre */}
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-2">Nombre</label>
            <input
              id="name"
              type="text"
              {...register("name")}
              placeholder="Escribe tu nombre"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
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
              placeholder="ejemplo@correo.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Campo Teléfono */}
          <div>
            <label htmlFor="phone" className="block text-gray-600 mb-2">Teléfono</label>
            <input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="Ej. 654321987"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Campo Motivo de la Consulta */}
          <div>
            <label htmlFor="reason" className="block text-gray-600 mb-2">Motivo de la Consulta</label>
            <textarea
              id="reason"
              {...register("reason")}
              placeholder="Describe brevemente tu motivo de consulta"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}
          </div>

          {/* Botón de Envío siempre visible, solo activado si el formulario es válido */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!canSubmit || loading} // Se mantiene visible pero solo se activa si el formulario es válido
              className={`px-6 py-3 font-semibold rounded-full transition flex items-center ${
                canSubmit && !loading
                  ? "bg-brandPurple text-white hover:bg-brandPurple-dark"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  </svg>
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;