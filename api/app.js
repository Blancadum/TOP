const express = require("express");
const cors = require("cors");  // Importa CORS
const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors({
  origin: "http://localhost:3000",  // Permitido solo desde este dominio
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"],  
}));

// Middlewares
app.use(express.json());  // Para manejar JSON en las peticiones

// Importar las rutas
const authRoutes = require("./routes/auth.routes");  // Rutas de autenticación
const userRoutes = require("./routes/userRoutes");  // Rutas de usuarios
const contactRoutes = require("./routes/contactRoutes");  // Rutas de contacto
const postRoutes = require("./routes/postRoutes");  // Rutas de publicaciones

// Usar las rutas en la aplicación
app.use("/api/auth", authRoutes);  // Ruta para autenticación
app.use("/api/users", userRoutes);  // Ruta para gestionar usuarios
app.use("/api/contact", contactRoutes);  // Ruta para el contacto
app.use("/api/posts", postRoutes);  // Ruta para gestionar publicaciones

app.get("/", (req, res) => {
  res.send("¡Hooliiii!");
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Upsss, pues va a ser que no...");
});

// Exportar la instancia de Express
module.exports = app;