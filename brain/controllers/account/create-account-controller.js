'use strict'

const psqlDB = require('../../../database/psql-pool');

//TODO FUNCTION VALIDATE(is necesary that this function is async)

//TODO FUNCTION CREATE-PROFILE(is necesary that this function is async)

//OPTIONAL. CAN YOU INCLUDE verification email, verification code

async function createAccount(req, res, next) {
    const accountData = req.body;
  
    try {
      //Insert values
    } catch (e) {
      return res.status(400).send(e);
    }

    const now = new Date();
    // const securePassword = await bcrypt.hash(accountData.password, 10);
    // const uuid = uuidV4();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');

    // const connection = await mysqlPool.getConnection();

    // const sqlInsercion = 'INSERT INTO users SET ?';

    //This function is the main. Insert new user and create mail confirmation
    // try {
    //     const resultado = await connection.query(sqlInsercion, {
    //       uuid, // uuid: uuid,
    //       email: accountData.email,
    //       password: securePassword,
    //       created_at: createdAt,
    //     });
    //     connection.release();
    
    //     const verificationCode = await addVerificationCode(uuid);
    
    //     await sendEmailRegistration(accountData.email, verificationCode);
    //     await createProfile(uuid);
    
    //     return res.status(201).send();
    //   } catch (e) {
    //     if (connection) {
    //       connection.release();
    //     }
    
    //     return res.status(500).send(e.message);
    //   }
    
  
}
  

module.exports = createAccount;