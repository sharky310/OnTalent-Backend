'use strict';

const document = require('../../../database/models/Document');


async function uploadDocument(req, res, next) {

    const {file} = req;

    if (!file || !file.buffer) {
        console.log(file+" error de fichero")
        return res.status(400).send();
      }

        const newDocument = await document.create({
              id_document: 1, //TODO: I need autoincrement
              name: file.originalname,
              type: "pdf", //TODO: I need that this it's get from request
              id_user: 20, //
              document: file.buffer
            }).then(() => {
              console.log(`File uploaded successfully! -> filename = ${file.originalname}`);
              res.json({msg:'File uploaded successfully! -> filename = ' + file.originalname});
            }).catch(err => {
              console.log(err);
              res.json({msg: 'Error', detail: err});
            });
          


}


module.exports = uploadDocument;