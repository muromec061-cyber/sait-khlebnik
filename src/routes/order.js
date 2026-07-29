const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { productId, quantity, customer } = req.body;
  res.status(201).send({
    message: 'ÐÐ°ÐºÐ°Ð· ÑÐ¾Ð·Ð´Ð°Ð½',
    order: { productId, quantity, customer }
  });
});

module.exports = router;