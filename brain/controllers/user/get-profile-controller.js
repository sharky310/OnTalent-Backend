'use strict'

const user = require('../../../database/models/User');

/**
 * 
 * @param {*} req - Request value 
 * @param {*} res  - Response of server
 * @param {*} next - Function next to jump next middleware
 */
async function getUserProfile(req, res, next){


    try{
        
    const userData = await user.findOne({
        where:{
            email: req.headers.email,
        }
    });

    res.status(200).json(userData);

} catch(e){
    res.status(404).send(e);
}

}

module.exports = getUserProfile;