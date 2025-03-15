const express = require("express");
const cors = require("cors"); // Importa CORS
const app = express();

// Habilitar CORS para todas las solicitudes
app.use(
  cors({
    origin: "http://localhost:3000", // Permitido solo desde este dominio (ajústalo si lo necesitas en producción)
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], // Permitir estos encabezados
  })
);

// Middlewares
app.use(express.json()); // Para manejar JSON en las peticiones

// Importar las rutas
const authRoutes = require("./routes/auth.routes"); // Rutas de autenticación
const userRoutes = require("./routes/userRoutes"); // Rutas de usuarios
const contactRoutes = require("./routes/contactRoutes"); // Rutas de contacto
const postRoutes = require("./routes/postRoutes"); // Rutas de publicaciones

// Usar las rutas en la aplicación
app.use("/api/auth", authRoutes); // Ruta para autenticación
app.use("/api/users", userRoutes); // Ruta para gestionar usuarios
app.use("/api/contact", contactRoutes); // Ruta para el contacto
app.use("/api/posts", postRoutes); // Ruta para gestionar publicaciones

// Ruta raíz
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de Psicología Online!"); // Cambié el mensaje por algo más claro.
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Muestra el error en consola para depuración
  res.status(500).json({ error: "Ha ocurrido un error en el servidor." }); // Cambié a JSON para mayor consistencia
});

// Exportar la instancia de Express
module.exports = app;