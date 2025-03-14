const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true
    },
    specialty: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    postTitle: {
      type: String,
      required: true
    },
    // Un array de strings, cada elemento es un párrafo
    post: {
      type: [String],
      required: true
    }
  },
  {
    timestamps: true // crea 'createdAt' y 'updatedAt' automáticamente
  }
);

module.exports = mongoose.model('Post', postSchema);
