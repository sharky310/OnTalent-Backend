'use strict'

const express = require('express');

const router = express.Router();

router.post('/document', uploadDocumentController);

module.exports = router;