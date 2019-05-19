'use strict'

const express = require('express');

const createRolController = require('../controllers/admin/create-rol-controller');
const createDepartmentController = require('../controllers/admin/create-department-controller');

const router = express.Router();

router.post('/admin/rol', createRolController);
router.post('/admin/deparment', createDepartmentController);

module.exports = router;