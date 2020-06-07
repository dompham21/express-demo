var express = require('express');
var router = express.Router();
var productsController = require('../controller/products.controller');


router.get('/',productsController.index);

module.exports = router;