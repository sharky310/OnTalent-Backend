'use strict';

const user = require('../../../database/models/User');

async function activateAccount(req, res, next){

    const {verification_code } = req.headers;

    try{

        res.status(200);
    }catch(e){

    }
    res.status(404);

}

module.exports = activateAccount;