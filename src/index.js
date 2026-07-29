// Entry point
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('ÐÐ¾Ð±ÑÐ¾ Ð¿Ð¾Ð¶Ð°Ð»Ð¾Ð²Ð°ÑÑ Ð½Ð° Ð¡Ð°Ð¹Ñ Ð¥Ð»ÐµÐ±Ð½Ð¸Ðº!');
});

app.listen(PORT, () => {
  console.log(`Ð¡ÐµÑÐ²ÐµÑ Ð·Ð°Ð¿ÑÑÐµÐ½ Ð½Ð° Ð¿Ð¾ÑÑÑ ${PORT}`);
});