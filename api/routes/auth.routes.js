const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");
const sessionsController = require("../controllers/sessionController");  // Importa el controlador correcto
const auth = require("../middlewares/sessionMiddleware"); // Verifica que esta ruta sea correcta

// Ruta para registrar un usuario
router.post("/users", usersController.create); 

// Ruta para iniciar sesión
router.post("/sessions", sessionsController.create);  // Asegúrate de que 'create' sea una función válida

// Ruta protegida: obtener perfil del usuario si la sesión está activa
router.get("/users/me", auth.checkSession, usersController.profile);

// Ruta para cerrar sesión
router.delete("/sessions", auth.checkSession, sessionsController.destroy);

// Ruta de prueba para verificar que las rutas funcionan
router.get("/test", (req, res) => {
  res.send("¡Rutas funcionando!");
});

// Obtener todos los usuarios
router.get("/users", usersController.list);

module.exports = router;
