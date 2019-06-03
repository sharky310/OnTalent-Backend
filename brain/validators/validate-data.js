'use strict';

const Joi = require('joi');


//TODO include dni
async function validateData(dataBox) {
    
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };
  
    return Joi.validate(dataBox, schema);
  }
  
module.exports = validateData;  