// Suponiendo que ya tienes un servidor Express configurado
const express = require('express');
const app = express();

// Otras rutas de la aplicación...

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ error: "404 - Página no encontrada" });
});
