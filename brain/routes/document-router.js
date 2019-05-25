'use strict'

const express = require('express');
const multer = require('multer');

const upload = multer();
const router = express.Router();

const uploadDocumentController = require('../controllers/document/upload-document-controller');

router.post('/document', uploadDocumentController);

module.exports = router;