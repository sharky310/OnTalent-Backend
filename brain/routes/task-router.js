'use strict'

const express = require('express');

const createTaskController = require('../controllers/task/create-task-controller');

const router = express.Router();

//TODO include check_token
router.post('/task', createTaskController);

module.exports = router;