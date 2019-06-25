'use strict'

const express = require('express');


const createEventController = require('../controllers/event/create-event-controller');
const getListEventController = require('../controllers/event/get-events-controller');
const checkToken = require('../controllers/session/check-token');

const router = express.Router();

//TODO include check_token
router.post('/event',createEventController);
router.get('/event/list', getListEventController)

module.exports = router;