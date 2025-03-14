const express = require("express");
const { register, login, profile, list } = require("../controllers/userController"); // ✅ Corregido
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

// Rutas públicas
router.post("/register", register); // ✅ Cambiado "create" por "register"
router.post("/login", login);
router.get("/", list);

// Rutas protegidas (requieren autenticación)
router.get("/profile", authMiddleware, profile); 

module.exports = router;
