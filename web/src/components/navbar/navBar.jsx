import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ isOpen }) {
  return (
    <nav
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        w-2/3 p-6 flex flex-col gap-4 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:flex-row md:w-auto md:p-0 md:shadow-none md:flex`}
    >
      <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
        {[
          { to: "/", label: "Home" },
          { to: "/servicios", label: "Servicios" },
          { to: "/tarifas", label: "Tarifas" },
          { to: "/about-me", label: "Quién soy" },
          { to: "/Videoteca", label: "Videos" },
          { to: "/Blog", label: "Blog" },
          { to: "/Contact", label: "Contacto" },
        ].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-lg text-gray-700 hover:text-gradient transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
