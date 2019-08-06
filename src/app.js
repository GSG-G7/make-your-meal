const express = require('express');

const exphbs = require('express-handlebars');

const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
// helper
// // you need to access with hbs files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }),
);

const port = process.env.PORT || 3000;

app.set('port', port);
app.use(routes);
module.exports = app;
