const express = require("express");
const { create, login, profile, list } = require("../controllers/userController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

// Rutas públicas
router.post("/register", create);
router.post("/login", login);

// Rutas protegidas (requieren autenticación)
router.get("/profile", authMiddleware, profile);
router.get("/users", authMiddleware, list);

module.exports = router;
