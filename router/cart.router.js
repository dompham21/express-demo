var express = require('express');
var router = express.Router();
var cartController = require('../controller/cart.controller');
router.get('/add/:productId',cartController.addToCart);
router.get('/',cartController.cart);

module.exports = router;