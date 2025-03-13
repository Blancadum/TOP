import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Helmet } from "react-helmet-async"; 
import LoginForm from "../components/Formularios/LoginForm"; 
import Layout from "../components/PageLayout"; 

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para hacer el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      console.log("Inicio de sesión exitoso", data);

      // Guardar el token en localStorage
      localStorage.setItem("token", data.token);

      // Redirigir a la página principal
      navigate("/");

    } catch (error) {
      setError(error.message);
      console.error("Error al iniciar sesión: ", error.message);
    }
  };

  return (
    <Layout>
      {/* Metadata para SEO */}
      <Helmet>
        <title>Iniciar sesión - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Inicia sesión en tu cuenta de Blanca de Uña Martín. Accede a nuestros servicios de terapia online."
        />
        <meta name="keywords" content="login, sesión, terapia online, psicología" />
        <meta name="author" content="Blanca de Uña Martín" />
      </Helmet>

      {/* Contenido principal */}
      <section className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Iniciar sesión
          </h1>

          {/* Mostrar error de inicio de sesión */}
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <LoginForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
      </section>
    </Layout>
  );
}
