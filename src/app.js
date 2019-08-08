const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { Ingredient } = require('./views/helpers/ingredient');
const routes = require('./Controllers');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: {
      Ingredient,
    },
  }),
);

const port = process.env.PORT || 3000;

app.set('port', port);
app.use(routes);
module.exports = app;
