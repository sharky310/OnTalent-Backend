'use strict';

const user = require('../../../database/models/User');

async function activateAccount(req, res, next){

    try{
        console.log("entra a actualizar");
        let query = await user.update(
        {
            account_activated: new Date(),
        },
        {  
            where: {verification_code: req.headers.verification_code},
          }
          ).then(result =>
            console.log(result)
          )
          .catch(err =>
            console.log(err)
          )
          console.log("Sale de ello");
        res.status(200).send("Account activated");
    }catch(e){
        res.status(404);
    }
    res.status(404);

}

module.exports = activateAccount;