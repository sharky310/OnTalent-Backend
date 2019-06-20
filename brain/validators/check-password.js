'use strict'


/**
 * Check that password send for frontend and password for database are equals
 * @param {*} password - Password input
 * @param {*} passwordDB - Password save in database
 */
async function checkPassword(password, passwordDB){

    try{
          return await bcrypt.compare(password, passwordDB);
        }
        catch(e){
          return false;
       }
  
  }

  module.exports = checkPassword;