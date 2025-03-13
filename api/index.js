const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contact.routes"); // Importar rutas de contacto

// Conectar con la base de datos de MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" Conectado a MongoDB"))
  .catch((err) => console.log(" Error de conexión a MongoDB:", err));

// Middlewares
app.use(express.json());
app.use(cors());

// Usar las rutas de contacto
app.use("/api", contactRoutes); 

// Se inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor furulando en puerto ${PORT}`));