const scoreBuilder = require('../controllers/scoreController');

module.exports = app => {
  app
    .route('/score')
    .get(scoreBuilder.list_all_score)
    .post(scoreBuilder.create_a_score);

  app
    .route('/score/:scoreId')
    .get(scoreBuilder.read_a_score)
    .put(scoreBuilder.update_a_score)
    .delete(scoreBuilder.delete_a_score);
};