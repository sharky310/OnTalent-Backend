'use strict'

const express = require('express');

const checkToken = require('../controllers/session/check-token');


const createRolController = require('../controllers/admin/create-rol-controller');
const getRolController = require('../controllers/admin/get-rol-controller');

const createDepartmentController = require('../controllers/admin/create-department-controller');
const getDepartmentController = require('../controllers/admin/get-department-controller');

const router = express.Router();

//TODO include check_token
router.post('/admin/rol', checkToken, createRolController);
router.get('/admin/rol',  checkToken, getRolController);


router.post('/admin/department',  checkToken, createDepartmentController);
router.get('/admin/department', checkToken, getDepartmentController);

module.exports = router;