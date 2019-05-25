'use strict';

const document = require('../../../database/models/Document');

const client = require('filestack-js').init(process.env.FILESTACK_API_KEY);

async function uploadDocumentController(req, res, next) {

    const result = await client.upload("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjn4eLywrbiAhUQBWMBHaddB34QjRx6BAgBEAU&url=https%3A%2F%2Fwww.theverge.com%2Ftldr%2F2018%2F10%2F29%2F18039884%2Fjames-cameron-avatar-sequels-papyrus-font-logo-rip&psig=AOvVaw24dqIMtfMkIQRM5kbWd0pj&ust=1558868245926314");
    console.log(result);
    res.send(404);

}

module.exports = uploadDocumentController;