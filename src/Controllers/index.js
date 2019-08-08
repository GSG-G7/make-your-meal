const express = require('express');
const { search } = require('./search');

const router = express.Router();
require('dotenv').config();
const {
  client,
  server,
} = require('./errors');


router.get('/', (req, res) => {
  res.render('home');
});

router.post('/search', search);

router.use(client);
router.use(server);

module.exports = router;
