import React, { useState } from "react";
import RegisterForm from "../components/Formularios/RegisterForm";
import Layout from "../components/PageLayout";
import { Helmet } from "react-helmet-async";

const RegisterPage = () => {
  // Estado inicial para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "paciente", // Valor predeterminado
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor
    console.log("Datos enviados:", formData);
  };

  return (
    <Layout>
      {/* Metadata */}
      <Helmet>
        <title>Registro - Blanca de Uña Martín</title>
        <meta
          name="description"
          content="Formulario de registro para crear una cuenta en el sitio web de Blanca de Uña Martín."
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Registro - Blanca de Uña Martín" />
        <meta
          property="og:description"
          content="Formulario de registro para crear una cuenta."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/register" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/registro.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Registro - Blanca de Uña Martín" />
        <meta
          name="twitter:description"
          content="Formulario de registro para crear una cuenta."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/registro.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Contenido principal */}
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-lg mx-auto bg-white p-8">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
            Registro
          </h2>
          <RegisterForm
            formData={formData} // Pasa formData al formulario
            handleChange={handleChange} // Pasa handleChange
            handleSubmit={handleSubmit} // Pasa handleSubmit
            error={null} // Manejo de errores (opcional)
            loading={false} // Indica si está cargando (opcional)
          />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
