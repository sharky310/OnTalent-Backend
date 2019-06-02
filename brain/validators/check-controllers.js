'use strict'

const user = require('../../database/models/User');

async function checkValues(field, value){

try{
    const query = await user.findAll({
        where: {
          field: value
        }
      });

      console.log(query);
    
      if (query!=null) return true;
        else return false;
    }catch(e){
        return false;
    }
}

module.exports = checkValues;