const fetch = require('node-fetch');

exports.search = (req, res, next) => {
  const query = req.body.input;
  const key = process.env.API_KEY;
  const url = `https://www.themealdb.com/api/json/v1/${key}/search.php?s=${query}`;
  fetch(url)
    .then(data => data.json())
    .then((data) => {
      res.render('home', {
        meals: data.meals,
      });
    })
    .catch(error => next(error));
};
