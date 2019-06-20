'use strict'

const user = require('../../database/models/User');


/**
 * Check that the value is different of null
 * @deprecated
 * @param {*} value - Value for check
 */
async function checkValues(field, value){
//TODO remove field
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