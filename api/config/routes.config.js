const express = require("express");
const router = express.Router();
const createError = require("http-errors");

// Importar controladores
const usersController = require("../controllers/users.controller");
const sessionsController = require("../controllers/sessions.controller");

// Importar middleware de autenticación
const auth = require("../middleware/session.middleware");

// Nueva ruta para devolver el JSON de usuarios
router.get("/users", usersController.list);

// Rutas de autenticación
router.post("/register", usersController.create);
router.post("/login", sessionsController.create);
router.get("/profile", auth.checkSession, usersController.profile);

module.exports = router;
