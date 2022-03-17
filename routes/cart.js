const express = require('express');
const {
  delete_item,
  add_cart_item,
  get_cart_items,
} = require('../controllers/cart.controller');
const isAuth = require('../middleware/auth');

const router = express.Router();

router.get('/get_cart/:id', isAuth, get_cart_items);


router.post('/add_cart/:id', isAuth, add_cart_item);


router.delete('/delete_cart/:userId/:itemId', isAuth, delete_item);

module.exports = router;
