const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.header("Authorization"); // Obtener el token del header
  if (!token) return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);  // Usar la clave secreta desde el archivo .env
    req.user = verified;  // Guardar datos del usuario en `req.user`
    next();  // Pasar al siguiente middleware o controlador
  } catch (error) {
    res.status(400).json({ error: "Token inválido." });
  }
};