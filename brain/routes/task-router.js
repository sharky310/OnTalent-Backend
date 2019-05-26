'use strict'

const express = require('express');

const createTaskController = require('../controllers/task/create-task-controller');

const router = express.Router();

router.post('/task', createTaskController);

module.exports = router;