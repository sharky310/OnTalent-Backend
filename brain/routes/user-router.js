'use strict'

const express = require('express');

const getUserProfile = require('../controllers/user/get-profile-controller');

const router = express.Router();

router.get('/profile/:userId', getUserProfile); //TODO FIX this route

module.exports = router;