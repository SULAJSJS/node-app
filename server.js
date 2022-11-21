const express = require('express');
var morgan = require('morgan');
const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const postApiRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/createPath');

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

const app = express();

app.set('view engine', 'ejs');

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg('We are successfully connected to mb dataBase')))
  .catch((error) => console.log(errorMsg(error.message)));

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(errorMsg(error.message))
    : console.log(successMsg(`listening port ${process.env.PORT}`));
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(postApiRoutes);

app.get('about-us', (req, res) => {
  res.redirect('/contacts');
});
app.use((req, res) => {
  const title = 'Error Page';
  res.render(createPath('error'), { title });
});
