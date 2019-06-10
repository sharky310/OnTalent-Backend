'use strict'

const express = require('express');

const checkToken = require('../controllers/session/check-token');

const createTaskController = require('../controllers/task/create-task-controller');

const router = express.Router();

//TODO include check_token
router.post('/task',  checkToken, createTaskController);

module.exports = router;