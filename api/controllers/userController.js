const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Validar que los campos no estén vacíos
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Comprobar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Credenciales inválidas" }); // Mejor respuesta por seguridad
    }

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario con la contraseña encriptada
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" }); // No especificamos si es el email o la contraseña
    }

    // Comparar la contraseña ingresada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" }); // Misma respuesta por seguridad
    }

    // Generar un token JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login exitoso", token });
  } catch (error) {
    next(error);
  }
};
