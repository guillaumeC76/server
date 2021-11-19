const mongoose = require('mongoose');

const { Schema } = mongoose;

const scoreSchema = new Schema(
  {
    pseudo: {
      type: String,
      default: 'Anonyme'
    },
    nombre: {
      type: Number,
      required: 'Le score ne peux pas etre vide'
    },
  },
  { collection: 'score' }
);

module.exports = mongoose.model('score', scoreSchema);