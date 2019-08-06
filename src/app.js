const express = require('express');

const exphbs = require('express-handlebars');

const path = require('path');

const app = express();

const routes = require('./routes');
// helper
//// you need to access with hbs files 

const port = process.env.PORT || 3000;

app.set('port', port);
app.use(routes);
module.exports = app;
