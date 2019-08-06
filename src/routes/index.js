const express = require('express');

const search = require('./search');

const fetch = require('node-fetch');

const Bluebird = require('bluebird');

fetch.Promise = Bluebird;

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.post('/search', (req, res) => {
  const query = 'p';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  fetch(url)
    .then(data => data.json())
    .then(data => res.render('home', {
      meals: data.meals,
    }));
});
module.exports = router;
