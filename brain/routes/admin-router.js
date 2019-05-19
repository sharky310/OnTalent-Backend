'use strict'

const express = require('express');

const createRolController = require('../controllers/admin/create-rol-controller');
const getRolController = require('../controllers/admin/get-rol-controller');

const createDepartmentController = require('../controllers/admin/create-department-controller');
const getDepartmentController = require('../controllers/admin/get-department-controller');

const router = express.Router();

router.post('/admin/rol', createRolController);
router.get('/admin/rol', getRolController);


router.post('/admin/deparment', createDepartmentController);
router.get('/admin/deparment', getDepartmentController);

module.exports = router;