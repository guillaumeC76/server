const inscriptionBuilder = require('../controllers/inscriptionController');

module.exports = app => {
  app
    .route('/inscription')
    .get(inscriptionBuilder.list_all_inscription)
    .post(inscriptionBuilder.create_a_inscription);

  app
    .route('/inscription/:inscriptionId')
    .get(inscriptionBuilder.read_a_inscription)
    .put(inscriptionBuilder.update_a_inscription)
    .delete(inscriptionBuilder.delete_a_inscription);
};