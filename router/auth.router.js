var express = require('express');
var router = express.Router();
var authController  = require('../controller/auth.controller');

router.get('/login',authController.login);
router.post('/login',authController.postLogin);

module.exports =  router;