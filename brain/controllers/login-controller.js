
'use strict'

const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const user = require('../../database/models/User');

const AccountNotActivatedError = require('../controllers/error/account-not-activated-error');   


//TODO remove from here this function for that is repeat at validators folder
async function validateData(payload) {
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };
  
    return Joi.validate(payload, schema);
  }

/**
 * This function is the core of login-controller
 */
  async function login(req, res, next) {

    /**
     * One - Validate the request data
     */
    const accountData = { ...req.body };
    try {
      await validateData(accountData);
    } catch (e) {
      return res.status(400).send(e);
    }
    
    try {
        /**
         * Two - Send query to database for search user
         */
        const result = await user.findOne({
            where:{
                email: accountData.email,
            }   
        });
        /**
         * If account not activated before send email return a error
         */
        if (result.account_activated===null) {

          const accountNotActivated = new AccountNotActivatedError('you need to confirm the verification link');
  
          return next(accountNotActivated);
        }
  

        /**
         * Three - Check that password send for the user is OK
         */
        const laPasswordEstaOk = await bcrypt.compare(accountData.password,result.password);
        if (laPasswordEstaOk === false) { 
          return res.status(401).send();
        }
  

        /**
         * Four - Create token with JWT the payload use role attribute but it is not yet implemented
         */
        const payloadJwt = {
          email: result.email,
          role: result.id_rol===1 ? "admin" : "user",
        };
    
        const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
        const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, { expiresIn: jwtTokenExpiration });

        const response = {
          accessToken: token,
          expiresIn: jwtTokenExpiration,
          //TODO don't return role and use the value in payloadJWT
          role: result.id_rol
        };
    
        return res.status(200).json(response);
      }
  
       catch (e) {
      return res.status(500).send(e.message);
    }
}
  
  module.exports = login;
  
  