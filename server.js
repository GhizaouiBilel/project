const express = require('express');
const connectDb = require('./config/connectDb');
const user = require('./routes/user');
const product = require('./routes/product');
const cart = require('./routes/cart');
const app = express();
connectDb();

app.use(express.json());

app.use('/user', user);
app.use('/product', product);
app.use('/cart', cart);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server running on port ${PORT}`)
);
