const mongoose = require('mongoose');

const { Schema } = mongoose;

const scoreSchema = new Schema(
  {
    pseudo: {
      type: String,
    },
    nombre: {
      type: Number,
      required: 'Le score ne peux pas etre vide'
    },
    record: {
      type: Number,
    },
  },
  { collection: 'score' }
);

module.exports = mongoose.model('score', scoreSchema);