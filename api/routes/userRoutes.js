const express = require("express");
const { create, login, profile, list } = require("../controllers/userController"); // Asegúrate de que estas funciones estén exportadas correctamente
const { authMiddleware } = require("../middlewares/authMiddleware"); // Importa correctamente el middleware de autenticación
const router = express.Router();

// Ruta para registrar un usuario
// Esta ruta se utiliza para registrar un nuevo usuario
router.post("/register", create);

// Ruta para login
// Esta ruta permite a los usuarios (psicólogos) iniciar sesión y obtener un token JWT
router.post("/login", login);

// Ruta para obtener la lista de usuarios
// Asegúrate de que esta ruta solo sea accesible para administradores o usuarios autorizados
router.get("/", list);

// Ruta protegida para obtener el perfil del usuario autenticado
// Esta ruta solo debe ser accesible por usuarios autenticados (usando el token JWT)
router.get("/profile", authMiddleware, profile);

module.exports = router;
