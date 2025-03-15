import React from "react";
import Layout from "../components/PageLayout";
import RegisterForm from "../components/Formularios/RegisterForm";
import { Helmet } from "react-helmet-async";

export default function RegisterPage() {
  return (
    <>
      <Layout>
        {/* Metadata */}
        <Helmet>
          <title>Registro de Usuario - Blanca de Uña Martín</title>
          <meta
            name="description"
            content="Regístrate en nuestra plataforma para acceder a servicios de psicología online. Conoce más sobre nuestros servicios de terapia individual y de pareja."
          />
          <meta
            name="keywords"
            content="registro, servicios de psicología, terapia online, psicología, Blanca de Uña Martín, terapia individual, terapia de pareja"
          />
          <meta name="author" content="Blanca de Uña Martín" />
          <meta property="og:title" content="Registro de Usuario - Blanca de Uña Martín" />
          <meta
            property="og:description"
            content="Regístrate para acceder a nuestros servicios de psicología online. Terapias personalizadas y especializadas."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.tu-sitio-web.com/register" />
          <meta
            property="og:image"
            content="https://www.tu-sitio-web.com/images/register.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Registro de Usuario - Blanca de Uña Martín" />
          <meta
            name="twitter:description"
            content="Regístrate para acceder a nuestros servicios de psicología online. Terapias personalizadas y especializadas."
          />
          <meta
            name="twitter:image"
            content="https://www.tu-sitio-web.com/images/register.jpg"
          />
          <link rel="icon" href="/favicon.ico" />
        </Helmet>

        {/* Contenido principal */}
        <div className="max-w-lg mx-auto mt-12">
          <h2 className="text-3xl font-bold mb-6 text-brandPurple text-center">
            Registro
          </h2>
          <RegisterForm />
        </div>
      </Layout>
    </>
  );
}