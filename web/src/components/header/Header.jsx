import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom"; // React Router para navegación interna
import logo from "/images/logo.png";
import Navbar from "../navBar/navBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo como imagen */}
        <Link to="/" aria-label="Ir al inicio">
        <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />

        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          className="text-3xl focus:outline-none text-brandPurple md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen} // Mejora de accesibilidad
          aria-label="Abrir o cerrar menú"
        >
          ☰
        </button>

        <Navbar/>
      </div>
    </header>
  );
}