const express = require('express');

// const search = require('./search');

const router = express.Router();

const fetch = require('node-fetch');

const Bluebird = require('bluebird');

fetch.Promise = Bluebird;


router.get('/', (req, res) => {
  res.render('home');
});

router.post('/search', (req, res) => {

  const query = req.body.input;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  fetch(url)
    .then(data => data.json())
    .then(data => res.render('home', {
      meals: data.meals,
    }));
});

module.exports = router;
