const createError = require("http-errors");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Crear un nuevo usuario (Registro)
module.exports.create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) return next(createError(400, "El correo ya está registrado."));

    // Cifrar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Usuario registrado con éxito." });
  } catch (error) {
    next(error);
  }
};

// Iniciar Sesión (Login)
module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const user = await User.findOne({ email });
    if (!user) return next(createError(400, "Usuario no encontrado."));

    // Comparar contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(createError(400, "Contraseña incorrecta."));

    // Generar token JWT
    const token = jwt.sign({ id: user._id, role: user.role }, "secreto", { expiresIn: "1h" });

    res.json({ token, role: user.role });
  } catch (error) {
    next(error);
  }
};

// Obtener perfil del usuario autenticado
module.exports.profile = (req, res, next) => {
  res.json(req.user);
};

// Listar todos los usuarios (opcional)
module.exports.list = async (req, res, next) => {
  try {
    const users = await User.find().select("-password"); // Excluye la contraseña
    res.json(users);
  } catch (error) {
    next(error);
  }
};
