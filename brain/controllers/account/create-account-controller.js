'use strict'

const user = require('../../../database/models/User');
const sendConfirmationMail = require('../../../mail/send-confirmation-mail');

//TODO FUNCTION VALIDATE(is necesary that this function is async)

//TODO FUNCTION CREATE-PROFILE(is necesary that this function is async)

//OPTIONAL. CAN YOU INCLUDE  verification code

async function createAccount(req, res, next) {

    const {uuid, first_name, last_name, email, id, id_rol, id_dpt} = {...req.body}; // accountData is in JSON format

    const sp = null;

    try{
      let newUser = await user.create({
        uuid, //this value must be calculated with the uuid module
        first_name,
        last_name,
        email,
        id,
        sp,
        id_rol,
        id_dpt,
      });
      //await sendConfirmationMail(email);
      res.status(201).send("The user is created succesfully");
    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}
  
module.exports = createAccount;