import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; 
import RegisterForm from "../components/Formularios/RegisterForm"; 

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    phone: "",
    dni: "",
    birthdate: "",
    profilePicture: null, 
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Manejo de cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manejo de cambios para la foto de perfil
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      console.log("Usuario registrado exitosamente.");

      // Limpiar el formulario después del registro
      setFormData({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        dni: "",
        birthdate: "",
        profilePicture: null,
      });

    } catch (error) {
      setError(error.message);
      console.error("Error al registrar usuario: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Registro - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Crea tu cuenta para acceder a nuestros servicios de psicología online. Rellena el formulario y empieza tu camino hacia el bienestar."
        />
        <meta
          name="keywords"
          content="registro, cuenta, psicología online, terapia, bienestar emocional"
        />
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <RegisterForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
          error={error}
          loading={loading}
        />
      </div>
    </>
  );
}
