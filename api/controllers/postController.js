// controllers/postController.js
const Post = require("../models/postModel");

// Crear una nueva publicación
const createPost = async (req, res) => {
  try {
    const { title, content, author, authorImage } = req.body;
    const newPost = new Post({ title, content, author, authorImage });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Error creando la publicación", error });
  }
};

// Obtener todas las publicaciones
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo las publicaciones", error });
  }
};

// Obtener una publicación por ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo la publicación", error });
  }
};

// Actualizar una publicación
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Verificar si el usuario es el autor o un administrador
    if (post.author !== req.user.username && req.user.role !== "admin") {
      return res.status(403).json({ message: "No tienes permisos para editar esta publicación" });
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando la publicación", error });
  }
};

// Eliminar una publicación
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Verificar si el usuario es el autor o un administrador
    if (post.author !== req.user.username && req.user.role !== "admin") {
      return res.status(403).json({ message: "No tienes permisos para eliminar esta publicación" });
    }

    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Publicación no encontrada" });
    }
    res.status(200).json({ message: "Publicación eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando la publicación", error });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
