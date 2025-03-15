import React from "react";
import PsychologistLoginForm from "../components/Formularios/PsychologistLoginForm";
import { Helmet } from "react-helmet-async"; // Para la metadata

const PsychologistLoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar sesión como Psicólogo | Psicología Online</title>
        <meta
          name="description"
          content="Accede como psicólogo para poder escribir artículos en el blog. Si no estás en la whitelist, contacta para obtener permisos."
        />
        <meta
          name="keywords"
          content="login psicólogo, escribir artículo, psicología online, acceso blog psicólogos"
        />
        <meta name="author" content="Blanca de Uña Martín" />
        <meta property="og:title" content="Iniciar sesión como Psicólogo | Psicología Online" />
        <meta
          property="og:description"
          content="Accede como psicólogo para poder escribir artículos en el blog. Si no estás en la whitelist, contacta para obtener permisos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tu-sitio-web.com/psychologist-login" />
        <meta
          property="og:image"
          content="https://www.tu-sitio-web.com/images/login-psicologo.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Iniciar sesión como Psicólogo | Psicología Online" />
        <meta
          name="twitter:description"
          content="Accede como psicólogo para poder escribir artículos en el blog. Si no estás en la whitelist, contacta para obtener permisos."
        />
        <meta
          name="twitter:image"
          content="https://www.tu-sitio-web.com/images/login-psicologo.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-brandPurple">
            Iniciar sesión como Psicólogo
          </h2>
          {/* Aquí va el formulario que hemos creado */}
          <PsychologistLoginForm />
        </div>
      </div>
    </>
  );
};

export default PsychologistLoginPage;