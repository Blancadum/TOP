const Post = require('../models/Post.model');

// Listar todos los posts
module.exports.list = (req, res, next) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(next);
};

// Detalle de un post por ID
module.exports.detail = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }
      res.json(post);
    })
    .catch(next);
};

// Crear un nuevo post
module.exports.create = (req, res, next) => {
  Post.create(req.body)
    .then(post => {
      return res.status(201).json(post);
    })
    .catch(next);
};

// Actualizar un post existente
module.exports.update = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(post => {
      if (!post) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }
      res.json(post);
    })
    .catch(next);
};

// Eliminar un post
module.exports.delete = (req, res, next) => {
  Post.findByIdAndDelete(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }
      res.status(204).send(); // 204 significa "No Content"
    })
    .catch(next);
};
