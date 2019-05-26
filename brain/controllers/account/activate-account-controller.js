'use strict';

const user = require('../../../database/models/User');

async function activateAccount(req, res, next){

    try{
        let query = await user.update(
        {
            account_activated: new Date(),
        },
        {  
            where: {verification_code: req.query.verification_code},
          }
          ).then(result =>
            console.log(`User activated account with verification code ${req.query.verification_code}`)
          )
          .catch(err =>
            console.log(err)
          )
        res.status(202).send("Account activated");
    }catch(e){
        res.status(404);
    }
    res.status(404);

}

module.exports = activateAccount;