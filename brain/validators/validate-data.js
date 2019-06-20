'use strict';

const Joi = require('joi');


/**
 * Check that email and password are formats valid
 * @param {*} dataBox - Include data for check
 */
async function validateData(dataBox) {
    
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };
  
    const values = {"email" : dataBox.email, "password":dataBox.password};

    return Joi.validate(values, schema);

  }
  
module.exports = validateData;  