"use strict";

var express = require('express');

var authController = require('../Controle/auth1');

var router = express.Router();
router.post("/register", authController.register);
module.exports = router;