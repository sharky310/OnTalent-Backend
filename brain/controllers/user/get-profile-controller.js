'use strict'

const user = require('../../../database/models/User');
const checkPassword = require('../../validators/check-password');   

async function getUserProfile(req, res, next){

    const { email } = req.claims;

    try{

        const userData = await user.findOne({
            where:{
                email: email,
            }   
        });

    if (checkPassword(userData.dataValues.password,req.headers.email)===false) return res.status(401).send("Invalid password");
         
        res.status(200).json(userData);

} catch(e){
    res.status(404).send(e);
}

}

module.exports = getUserProfile;