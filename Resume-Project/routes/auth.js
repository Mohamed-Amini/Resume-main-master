const express = require('express');
const authController = require('../Controle/auth1')
const router = express.Router();

router.post("/register", authController.register );
module.exports = router;