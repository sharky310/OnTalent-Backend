'use strict'

const express = require('express');
const multer = require('multer');

const upload = multer();
const router = express.Router();

const uploadDocumentController = require('../controllers/document/upload-document-controller');
const getDocumentController = require('../controllers/document/get-documents-controller');

router.post('/document', upload.single('file'), uploadDocumentController);
router.get('/document', getDocumentController);

module.exports = router;