const express = require("express");
const router = express.Router();

// Importar controladores
const usersController = require("../controllers/userController");
const sessionsController = require("../controllers/sessionController");

// Importar middleware de autenticación
const auth = require("../middlewares/sessionMiddleware");

// Ruta para obtener el perfil del usuario (requiere autenticación)
router.get("/profile", auth.checkSession, usersController.profile);  // Aquí es donde se maneja la autenticación

module.exports = router;
