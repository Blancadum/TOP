const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');


router.post('/contact', async (req, res) => {
  const { name, email, telefono, motivoConsulta } = req.body;

  if (!name || !email || !telefono || !motivoConsulta) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      telefono,
      motivoConsulta
    });

    await newContact.save();

    res.status(200).json({ message: "Formulario de contacto enviado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar los datos en la base de datos", details: error.message });
  }
});

module.exports = router;
