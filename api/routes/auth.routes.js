const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");
const sessionsController = require("../controllers/sessionController"); // Asegúrate de que esta importación sea correcta
const auth = require("../middlewares/session.middleware"); // Cambié 'middleware' por 'middlewares'

// Ruta para registrar un usuario
router.post("/users", usersController.create);

// Ruta para iniciar sesión
router.post("/sessions", sessionsController.create);

/* Ruta protegida: obtener perfil del usuario si la sesión está activa
router.get("/users/me", auth.checkSession, usersController.profile);

// Ruta para cerrar sesión
router.delete("/sessions", auth.checkSession, sessionsController.destroy);
*/
// Ruta de prueba para verificar que las rutas funcionan
router.get("/test", (req, res) => {
  res.send("¡Rutas funcionando!");
});

/* Obtener todos los usuarios
router.get("/users", usersController.list);

// Ruta para login
router.post("/login", sessionsController.login);
*/


module.exports = router;
