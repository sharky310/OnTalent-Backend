'use strict'

const express = require('express');
const getUserProfile = require('../controllers/user/get-profile-controller');
const checkToken = require('../controllers/session/check-token')
const updateUserPass = require('../controllers/user/put-update-pass');  
const getListProfile = require('../controllers/user/get-list-profile-controller');

const router = express.Router();

router.get('/profile',getUserProfile);
router.put('/profile/pass',updateUserPass);
router.get('/profiles',getListProfile)

module.exports = router;