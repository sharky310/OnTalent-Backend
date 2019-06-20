'use strict'

const user = require('../../../database/models/User');
const bcrypt = require('bcrypt');

async function updateUserPass(req, res, next){

    const {newPass} = { ...req.body };
    const { email } = {...req.claims};

    try{

        const hashPass = await bcrypt.hash(newPass, 10)
        
        await user.update(
            { password: hashPass },
            { where: {email: email}}
        )
        return res.status(200).send("Pass update");
    } catch(e){
        return res.status(304).send("Not update");
    }
}

module.exports = updateUserPass;