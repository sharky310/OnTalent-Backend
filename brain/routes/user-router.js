'use strict'

const express = require('express');
const getUserProfile = require('../controllers/user/get-profile-controller');
const checkToken = require('../controllers/session/check-token')
const updateUserPass = require('../controllers/user/put-update-pass');  

const router = express.Router();

router.get('/profile', checkToken, getUserProfile);
router.put('/profile/pass', checkToken, updateUserPass);

module.exports = router;