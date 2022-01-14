const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Score = require('./api/models/scoreModel');
const routes_score = require('./api/routes/scoreRoutes');

global.Inscription = require('./api/models/inscriptionModel');
const routes_inscription = require('./api/routes/inscriptionRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://guillaume:cKyvJYrtpAF7ZxFs@cluster0.vmw6l.mongodb.net/gweb-projet',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes_score(app);
routes_inscription(app);
app.listen(port);

app.use((req, res) => {
  res.status(200).send({ url: `${req.originalUrl} ok` });
});

console.log(`Server started on port ${port}`);