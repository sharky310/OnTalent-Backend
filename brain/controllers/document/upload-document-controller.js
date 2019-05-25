'use strict';

const document = require('../../../database/models/Document');

var cloudinary = require('cloudinary');


async function uploadDocument(req, res, next) {

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARI_CLOUD_NAME, 
        api_key: process.env.CLOUDINARI_API_KEY, 
        api_secret: process.env.CLOUDINARI_API_SECRET
      });

    try{
        await cloudinary.uploader.upload("../../../internal_docs/documents/onboarding-linkedin.pdf", {public_id: 'single_page_pdf'}, function(result) { })
        res.status(201);
    } catch(e){
        res.status(400).send(e);
    }

}

module.exports = uploadDocument;