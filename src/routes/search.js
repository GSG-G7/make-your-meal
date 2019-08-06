
const fetch = require('node-fetch');

const Bluebird = require('bluebird');

fetch.Promise = Bluebird;


exports.post = (req, res) => {
  const query = 'p';
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  fetch(url)
    .then(data => data.json())
    .then(data => res.send(data));
};
