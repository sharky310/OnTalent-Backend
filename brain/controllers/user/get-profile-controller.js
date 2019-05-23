'use strict'

const user = require('../../../database/models/User');
/**
 * Return all info about a user, searching by email
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
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