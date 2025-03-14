module.exports.register = async (req, res, next) => {
    try {
      const { name, email, password, role } = req.body;
  
      // Validar que los campos no estén vacíos
      if (!name || !email || !password || !role) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
      }
  
      // Comprobar si el usuario ya existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "El correo electrónico ya está en uso" });
      }
  
      // Encriptar la contraseña antes de guardarla
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Crear usuario con la contraseña encriptada y el rol
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,  // Guardar el rol en la base de datos
      });
  
      // Eliminar la contraseña del objeto usuario antes de enviarlo
      user.password = undefined;
  
      res.status(201).json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
      next(error);
    }
  };
  