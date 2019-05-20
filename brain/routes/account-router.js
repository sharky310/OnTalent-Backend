'use strict'

const express = require('express');

const createAccountController = require('../controllers/account/create-account-controller');
const activateAccountController = require('../controllers/account/activate-account-controller');

const router = express.Router();

router.post('/account', createAccountController);
router.get('/account/activate', activateAccountController);

module.exports = router;