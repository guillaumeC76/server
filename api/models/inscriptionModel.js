const mongoose = require('mongoose');
const { Schema } = mongoose;

const inscriptionSchema = new Schema(
  {
    nom: {
      type: String,
      required: 'Le nom ne peux pas etre vide'
    },
    prenom: {
      type: String,
      required: 'Le prénom ne peux pas etre vide'
    },
    pseudo: {
      type: String,
      required: 'Le pseudo ne peux pas etre vide'
    },
    email: {
      type: String,
      required: 'Email ne peux pas etre vide'
    },
    password: {
      type: String,
      required: 'Le password ne peux pas etre vide'
    },
    confirm_password: {
      type: String,
      required: 'Le confirm_password ne peux pas etre vide'
    },
  },
  { collection: 'inscription' }
);

module.exports = mongoose.model('inscription', inscriptionSchema);