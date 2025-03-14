const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Cargar variables de entorno

const app = express();

// Importar rutas
const contactRoutes = require("./routes/contactRoutes"); // Rutas de contacto corregidas
const userRoutes = require("./routes/userRoutes"); // Rutas de usuario

// Middlewares
app.use(express.json());
app.use(cors());

// Conectar con la base de datos de MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => {
    console.error("Error de conexión a MongoDB:", err);
    process.exit(1); // Salir del proceso si hay error
  });

// Usar las rutas
app.use("/api/users", userRoutes);
app.use("/api", contactRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor funcionando en puerto ${PORT}`));
