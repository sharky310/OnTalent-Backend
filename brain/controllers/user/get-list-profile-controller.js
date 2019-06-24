'use strict'

const user = require('../../../database/models/User');
const checkPassword = require('../../validators/check-password');   

async function getListProfile(req, res, next){

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