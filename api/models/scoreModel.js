const mongoose = require('mongoose');

const { Schema } = mongoose;

const scoreSchema = new Schema(
  {
    nombre: {
      type: Number,
      required: 'score cannot be blank'
    },
  },
  { collection: 'score' }
);

module.exports = mongoose.model('score', scoreSchema);