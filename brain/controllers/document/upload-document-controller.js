'use strict';

const document = require('../../../database/models/Document');


async function uploadDocument(req, res, next) {

    const {file} = req;

    if (!file || !file.buffer) {
        console.log(file+" error de fichero")
        return res.status(400).send();
      }

        const newDocument = await document.create({
              name: file.originalname,
              type: "pdf", //TODO: I need that this it's get from request
              id_user: process.env.ID_ADMIN, //TODO: We need change id_user for user to admin id
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