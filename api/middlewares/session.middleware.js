// middlewares/session.middleware.js
const jwt = require("jsonwebtoken");

module.exports.checkSession = (req, res, next) => {
  const token = req.header("Authorization");

  // Si no hay token, devolver error
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. No se proporcionó un token." });
  }

  try {
    // Verificar el token utilizando el JWT_SECRET de tu archivo .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardamos los datos del usuario en req.user
    next(); // Pasar al siguiente middleware o ruta
  } catch (error) {
    return res.status(400).json({ error: "Token no válido o ha expirado." });
  }
};
