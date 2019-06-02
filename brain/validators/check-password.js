'use strict'

async function checkPassword(password, passwordDB){

    try{
        console.log("LLega");
          return await bcrypt.compare(password, passwordDB);
        }
        catch(e){
          return false;
       }
  
  }

  module.exports = checkPassword;