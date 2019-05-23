'use strict'

const express = require('express');

const createEventController = require('../controllers/event/create-event-controller');

const router = express.Router();

router.post('/event', createEventController);

module.exports = router;