const express = require("express");
const app = express();

// Middlewares, rutas, etc.
app.use(express.json());  // Para manejar JSON en las peticiones

// Definir rutas de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Exportar la instancia de Express
module.exports = app;
