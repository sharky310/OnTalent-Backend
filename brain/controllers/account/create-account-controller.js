'use strict'

const sequelize = require('../../../database/psql-pool');

//TODO FUNCTION VALIDATE(is necesary that this function is async)

//TODO FUNCTION CREATE-PROFILE(is necesary that this function is async)

//OPTIONAL. CAN YOU INCLUDE verification email, verification code

async function createAccount(req, res, next) {

    const accountData = {...req.body}; // accountData is in JSON format
  
    try {
      psql.pool.query('SELECT * FROM rol', (err, res) => {
        console.log(res);
        pool.end();
    })
      console.log(psql);
    } catch (e) {
      return res.status(400).send(e);
    }

    const now = new Date();
    // const securePassword = await bcrypt.hash(accountData.password, 10);
    // const uuid = uuidV4();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');

    const connection = await psqlPool.getConnection();

    
  
}
  

module.exports = createAccount;