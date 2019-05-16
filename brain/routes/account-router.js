'use strict'

const express = require('express');

const createAccountController = require('../controllers/account/create-account-controller');

const router = express.Router();

router.post('/account', createAccountController);

module.exports = router;