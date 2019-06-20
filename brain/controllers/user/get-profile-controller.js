'use strict'

const user = require('../../../database/models/User');
const checkPassword = require('../../validators/check-password');   

async function getUserProfile(req, res, next){

    /**
     * Extract mail user for req.claims. This request is send for checkToken function
     */
    const { email } = req.claims;


    //TODO include validator mail

    /**
     * Validate the request data 
     */
    try{
        const userData = await user.findOne({
            where:{
                email: email,
                raw: true
            }   
        });

    /**
     * Check if password is ok
     */
    if (checkPassword(userData.dataValues.password,req.headers.email)===false) return res.status(401).send("Invalid password");
         
        res.status(200).json(userData);

} catch(e){
    res.status(404).send(e);
}

}

module.exports = getUserProfile;