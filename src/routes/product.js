const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    { id: 1, name: 'ÐÐ°ÑÐ¾Ð½', price: 50 },
    { id: 2, name: 'Ð Ð¶Ð°Ð½Ð¾Ð¹ ÑÐ»ÐµÐ±', price: 70 }
  ]);
});

module.exports = router;