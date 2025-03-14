// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { protect, admin } = require("../middlewares/authMiddleware"); // Middleware de autenticación

/*
// Crear una publicación (requiere autenticación)
router.post("/", protect, postController.createPost);

// Obtener todas las publicaciones
router.get("/", postController.getAllPosts);

// Obtener una publicación por ID
router.get("/:id", postController.getPostById);

// Actualizar una publicación (solo el autor o admin)
router.put("/:id", protect, postController.updatePost);

// Eliminar una publicación (solo el autor o admin)
router.delete("/:id", protect, postController.deletePost);
*/

module.exports = router;
