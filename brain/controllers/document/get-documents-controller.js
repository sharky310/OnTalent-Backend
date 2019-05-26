'use strict';

const document = require('../../../database/models/Document');

const stream = require('stream');

async function getDocument(req, res, next){

    document.findOne({ where: {name: req.query.id} }).then(file=> {
        const fileContents = Buffer.from(file.dataValues.document, "base64");
        const readStream = new stream.PassThrough();
        readStream.end(fileContents);
    
         res.set('Content-disposition', 'attachment; filename=' + file.name);
         res.set('Content-Type', file.type);
 
         readStream.pipe(res);
  }).catch(err => {
    console.log(err);
    res.json({msg: 'Error', detail: err});
      })
}

module.exports = getDocument;