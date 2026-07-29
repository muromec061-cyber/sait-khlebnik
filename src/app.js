const express = require('express');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const statsRoutes = require('./routes/stats');

const app = express();
app.use(express.json());

app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/stats', statsRoutes);

module.exports = app;