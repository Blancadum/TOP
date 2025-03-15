const User = require("../models/userModel"); // Importar el modelo de usuario
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.create = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "El correo electrónico ya está en uso" });
    }

    // Crear el usuario con el rol adecuado
    const user = new User({
      name,
      email,
      password,
      role,  // Role que viene del formulario
    });

    await user.save();

    // Eliminar la contraseña antes de enviar la respuesta
    user.password = undefined;

    // Generación del token JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },  // Incluir role en el payload del JWT
      process.env.JWT_SECRET,  // Asegúrate de tener esta variable en el .env
      { expiresIn: "1h" }  // El token expira en 1 hora
    );

    // Devolver los datos del usuario y el token
    res.status(201).json({
      message: "Usuario registrado con éxito",
      user,
      token,  // Devolver el token JWT
    });
  } catch (error) {
    next(error);
  }
};

module.exports.list = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");  // Excluye la contraseña al listar usuarios
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports.profile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");  // Excluye la contraseña al obtener el perfil
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validar que los campos no estén vacíos
    if (!email || !password) {
      return res.status(400).json({ error: "El email y la contraseña son obligatorios." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Generación del token JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role }, // Incluir role en el payload del JWT
      process.env.JWT_SECRET,  // Asegúrate de tener esta variable en el .env
      { expiresIn: "1h" }  // El token expira en 1 hora
    );

    // Retornar el token en la respuesta
    res.status(200).json({ message: "Login exitoso", token });
  } catch (error) {
    next(error);
  }
};
