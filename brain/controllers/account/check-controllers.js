'use strict'

const user = require('../../../database/models/User');

async function check(field, value){

try{

    const query = await user.findAll({
        where: {
          field: value
        }
      });
    
      if (query!=null) return true;
        else return false;
    }catch(e){
        return false;
    }
}

module.exports = check;