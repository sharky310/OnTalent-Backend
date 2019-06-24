'use strict'

const user = require('../../../database/models/User');
const checkPassword = require('../../validators/check-password');   

async function getListProfile(req, res, next){

    /**
     * Extract mail user for req.claims. This request is send for checkToken function
     */
    const { email } = req.claims;


    //TODO include validator mail

    /**
     * Validate the request data 
     */
    try{
        const listData = await user.findAll({});

        res.status(200).json(listData);

} catch(e){
    res.status(404).send(e);
}

}

module.exports = getListProfile;