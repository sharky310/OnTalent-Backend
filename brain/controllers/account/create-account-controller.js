'use strict'

const user = require('../../../database/models/User');

//TODO FUNCTION VALIDATE(is necesary that this function is async)

//TODO FUNCTION CREATE-PROFILE(is necesary that this function is async)

//OPTIONAL. CAN YOU INCLUDE verification email, verification code

async function sendEmailRegistration(userEmail, verificationCode) {
  const linkActivacion = `http://localhost:3000/api/account/activate?verification_code=${verificationCode}`;
  const msg = {
    to: userEmail,
    from: {
      email: 'OnTalentInfo@yopmail.com',
      name: 'OnTalent activate account',
    },
    subject: 'Welcome to OnTalent systems for business',
    text: 'From today you belong out team',
    html: `To confirm the account <a href="${linkActivacion}">activate it here</a>`,
  };

  // const data = await sendgridMail.send(msg);

  // return data;
}


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
  
      res.status(201).send("The user is created succesfully");
    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}
  
module.exports = createAccount;