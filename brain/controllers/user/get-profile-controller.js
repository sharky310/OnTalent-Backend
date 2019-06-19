'use strict'

const user = require('../../../database/models/User');
const checkPassword = require('../../validators/check-password');
const bcrypt = require('bcrypt');

async function getUserProfile(req, res, next){

    console.log("Entra en profile");
    try{
        console.log(req.headers);
        const userData = await user.findOne({
            where:{
                email: req.headers.email,
            }   
        });


    if (checkPassword(userData.dataValues.password,req.headers.email)===false) return res.status(401).send("Invalid password");
         
        res.status(200).json(userData);

} catch(e){
    res.status(404).send(e);
}

}

module.exports = getUserProfile;