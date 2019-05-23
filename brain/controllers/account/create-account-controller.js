'use strict'

const user = require('../../../database/models/User');
const sendConfirmationMail = require('../../../mail/send-confirmation-mail');
const uuidV4 = require('uuid/v4');

//TODO FUNCTION VALIDATE(is necesary that this function is async)

//TODO FUNCTION CREATE-PROFILE(is necesary that this function is async)

//OPTIONAL. CAN YOU INCLUDE  verification code

async function createAccount(req, res, next) {

    const {uuid, first_name, last_name, email, id_rol, id_dpt} = {...req.body}; // accountData is in JSON format

    try{

      let newUser = await user.create({
        uuid: uuidV4(),
        first_name,
        last_name,
        email,
        id_rol,
        id_dpt,
        account_activated: null,
        account_created: new Date(),
        verification_code: uuidV4()
      });

      await sendConfirmationMail(newUser);
      res.status(201).send("The user is created succesfully");

    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}
  
module.exports = createAccount;