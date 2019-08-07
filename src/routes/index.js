const express = require('express');

// const search = require('./search');

const router = express.Router();

const fetch = require('node-fetch');
require('dotenv').config();
const Bluebird = require('bluebird');
const { client, server } = require('./errors');

fetch.Promise = Bluebird;


router.get('/', (req, res) => {
  res.render('home');
});

router.post('/search', (req, res, next) => {
  // const query = '';
  const query = req.body.input;
  const key = process.env.API_KEY;
  // console.log(req);
  const url = `https://www.themealdb.com/api/json/v1/${key}/search.php?s=${query}`;
  fetch(url)
    .then(data => data.json())
    .then(data => res.render('home', {
      meals: data.meals,
    }))
    .catch(error => next(error));
});

router.use(client);
router.use(server);

module.exports = router;
