/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brandPurple: "#5B21B6",
        brandPink: "#EC4899",
        background: "#ffffff",
        foreground: "#171717",
        darkBackground: "#0a0a0a",
        darkForeground: "#ededed",
      },
      fontFamily: {
        sans: ["Lexend Deca", "Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        h1: ["2rem", { lineHeight: "1.25", fontWeight: "700" }], // 32px
        h2: ["1.75rem", { lineHeight: "1.3", fontWeight: "600" }], // 28px
        h3: ["1.5rem", { lineHeight: "1.35", fontWeight: "500" }], // 24px
        paragraph: ["1rem", { lineHeight: "1.8", fontWeight: "400" }], // 16px
      },
      spacing: {
        section: "32px",
        pagePadding: "16px",
        cardPadding: "16px",
      },
      maxWidth: {
        container: "96rem", // 1536px (para que todo tenga un ancho controlado)
      },
      borderRadius: {
        card: "16px", // Bordes redondeados como en las tarjetas de precios
        button: "8px",
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.1)", // Sombra suave para tarjetas
        button: "0 4px 6px rgba(0, 0, 0, 0.15)", // Sombra para botones
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(90deg, #EC4899 0%, #5B21B6 100%)",
      },
      screens: {
        sm: "480px",  // Mejorar responsive en móviles pequeños
        md: "768px",  // Diseño para tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Pantallas grandes
      },
    },
  },
  plugins: [],
};
