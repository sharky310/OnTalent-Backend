'use strict'

const user = require('../../../database/models/User');
const sendConfirmationMail = require('../../../mail/send-confirmation-mail');
const uuidV4 = require('uuid/v4');
const checkValues = require('../../validators/check-controllers');
const bcrypt = require('bcrypt');
const initTask = require('../task/create-task-controller');

//TODO FUNCTION VALIDATE

async function createAccount(req, res, next) {

    const {dni, first_name, last_name, email, id_rol, id_dpt, password} = {...req.body}; // accountData is in JSON format
    const securePassword = await bcrypt.hash(password, 10);

    if ((check("email",email) && check("dni",dni))) res.status(412).send("Repeated user");


    try{
      let newUser = await user.create({
        dni,
        first_name,
        last_name,
        email,
        id_rol,
        id_dpt,
        account_activated: null,
        account_created: new Date(),
        verification_code: uuidV4(),
        password: securePassword
      });

      await sendConfirmationMail(newUser);
      initTask(dni);

      res.status(201).send("The user is created succesfully");

    } catch (e){
      //TODO included function for validate error
      res.status(400).send("An error has ocurred: "+e);
    }
  }

  
module.exports = createAccount;