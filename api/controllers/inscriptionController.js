const mongoose = require('mongoose');
const inscription = mongoose.model('inscription');

exports.list_all_inscription = (req, res) => {
  inscription.find({}, (err, inscription) => {
    if (err) res.send(err);
    res.json(inscription);
  });
};

exports.create_a_inscription = (req, res) => {
  const newinscription = new inscription(req.body);
  newinscription.save((err, inscription) => {
    if (err) res.send(err);
    res.json(inscription);
  });
};

exports.read_a_inscription = (req, res) => {
  inscription.findById(req.params.inscriptionId, (err, inscription) => {
    if (err) res.send(err);
    res.json(inscription);
  });
};

exports.update_a_inscription = (req, res) => {
  inscription.findOneAndUpdate(
    { _id: req.params.inscriptionId },
    req.body,
    { new: true },
    (err, inscription) => {
      if (err) res.send(err);
      res.json(inscription);
    }
  );
};

exports.delete_a_inscription = (req, res) => {
  inscription.deleteOne({ _id: req.params.inscriptionId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'inscription successfully deleted',
     _id: req.params.inscriptionId
    });
  });
};