const Contact = require('../models/contactModel');

exports.createContact = async (req,res) => {
    try{
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Contacto guardado con éxito'});
    } catch (error){
        res.status(400).son({ error: error.message })
    }
};