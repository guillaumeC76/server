const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Score = require('./api/models/scoreModel');
const routes = require('./api/routes/scoreRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://nifoo:9tdLinTmEwKj6OOZ@cluster0.vmw6l.mongodb.net/gweb-projet',
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(200).send({ url: `${req.originalUrl} ok` });
});

console.log(`Server started on port ${port}`);