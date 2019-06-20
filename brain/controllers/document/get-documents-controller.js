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
    console.log(err)
  })
}

module.exports = getDocument;