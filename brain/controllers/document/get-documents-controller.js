'use strict';

const document = require('../../../database/models/Document');

const stream = require('stream');

/**
 * Return list of documents
 */
async function getDocument(req, res, next){

  document.findAll({ attributes: ['name'] })
  .then(document => {
    res.status(200).send(document)
  })
  .catch(err => {
    res.status(400).send(e);
  })
}

module.exports = getDocument;