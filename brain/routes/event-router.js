'use strict'

const express = require('express');

const createEventController = require('../controllers/event/create-event-controller');

const router = express.Router();

//TODO include check_token
router.post('/event', createEventController);

module.exports = router;