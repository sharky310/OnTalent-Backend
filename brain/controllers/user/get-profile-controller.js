'use strict'

const user = require('../../../database/models/User');

async function getUserProfile(req, res, next){

    const userId = req.params.userId;

    try{
        
    const userData = await user.findOne({
        where:{
            uuid: userId,
        }
    });
    console.log(userData);
    res.json(userData);

} catch(e){
    res.status(403).send(e);
}

}

module.exports = getUserProfile;