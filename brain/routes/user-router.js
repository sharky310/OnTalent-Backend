'use strict'

const express = require('express');
const getUserProfile = require('../controllers/user/get-profile-controller');
const checkToken = require('../controllers/session/check-token')

const router = express.Router();

router.get('/profile', checkToken, getUserProfile); //TODO FIX this route

module.exports = router;