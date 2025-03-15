const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.header("Authorization"); // Obtener el token desde el header

  // Si no hay token, devolver error
  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  try {
    // Verificar el token usando JWT_SECRET del .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Guardar la información del usuario en req.user
    next(); // Continuar con la siguiente función o middleware
  } catch (error) {
    return res.status(400).json({ error: "Token inválido o ha expirado." });
  }
};
