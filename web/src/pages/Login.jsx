import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir después del login
import LoginForm from "../components/Formularios/LoginForm";  // Componente del formulario

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();  // Hook para navegación

  // Función para manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para manejar el envío del formulario
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

      // Guardar el token en localStorage o en el contexto global si usas Redux o Context API
      localStorage.setItem("token", data.token);

      navigate("/"); // Redirigir a la página principal
    } catch (error) {
      setError(error.message);
      console.error("Error al iniciar sesión: ", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <LoginForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
}
