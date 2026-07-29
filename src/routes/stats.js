const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    ordersToday: 15,
    revenueToday: 1000,
    bestSellingProduct: 'ÐÐ°ÑÐ¾Ð½'
  });
});

module.exports = router;