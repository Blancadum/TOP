// controllers/userController.js
const bcrypt = require("bcryptjs");
const User = require("../models/userModel"); // Modelo de usuario

module.exports.create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Validar que los campos no estén vacíos
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Comprobar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está en uso" });
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario con la contraseña encriptada
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "Usuario registrado con éxito", user });
  } catch (error) {
    next(error);  // Enviar el error al middleware de manejo de errores
  }
};
