'use strict'

async function checkPassword(password, passwordDB){

    try{
          return await bcrypt.compare(password, passwordDB);
        }
        catch(e){
          return false;
       }
  
  }

  module.exports = checkPassword;