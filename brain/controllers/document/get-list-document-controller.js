'use strict';

const document = require('../../../database/models/Document');

const stream = require('stream');

/**
 * Return list of documents
 */
async function getListDocument(req, res, next){

  document.findAll({ attributes: ['name'] })
  .then(document => {
    res.status(200).json(document)
  })
  .catch(err => {
    res.status(400).send(e);
  })
}

module.exports = getListDocument;