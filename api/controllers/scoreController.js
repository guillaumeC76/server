const mongoose = require('mongoose');
const score = mongoose.model('score');

exports.list_all_score = (req, res) => {
  score.find({}, (err, score) => {
    if (err) res.send(err);
    res.json(score);
  });
};

exports.create_a_score = (req, res) => {
  const newScore = new score(req.body);
  newScore.save((err, score) => {
    if (err) res.send(err);
    res.json(score);
  });
};

exports.read_a_score = (req, res) => {
  score.findById(req.params.scoreId, (err, score) => {
    if (err) res.send(err);
    res.json(score);
  });
};

exports.update_a_score = (req, res) => {
  score.findOneAndUpdate(
    { _id: req.params.scoreId },
    req.body,
    { new: true },
    (err, score) => {
      if (err) res.send(err);
      res.json(score);
    }
  );
};

exports.delete_a_score = (req, res) => {
  score.deleteOne({ _id: req.params.scoreId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'score successfully deleted',
     _id: req.params.scoreId
    });
  });
};