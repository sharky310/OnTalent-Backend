'use strict';

const document = require('../../../database/models/Document');

const stream = require('stream');

/**
 * TODO this controller we have chance to response only a document
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