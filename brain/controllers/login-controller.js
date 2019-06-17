
'use strict'

const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const user = require('../../database/models/User');

const AccountNotActivatedError = require('../controllers/error/account-not-activated-error');   


//TODO remove that this function is develop in validators folder
async function validateData(payload) {
    const schema = {
      email: Joi.string().email({ minDomainAtoms: 2 }).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    };
  
    return Joi.validate(payload, schema);
  }


  async function login(req, res, next) {

    const accountData = { ...req.body };
    try {
      await validateData(accountData);
    } catch (e) {
      return res.status(400).send(e);
    }
  
    /**
     * Check si existe el usuario en la bbdd
     */
    try {
        const result = await user.findOne({
            where:{
                email: accountData.email,
            }   
        });
  
        if (result.activated_at!=null) {

          const accountNotActivated = new AccountNotActivatedError('you need to confirm the verification link');
  
          // throw accountNotActivated; // throw new AccountNotActivatedError()
  
          return next(accountNotActivated);
        }
  
        const laPasswordEstaOk = await bcrypt.compare(accountData.password,result.password);
        if (laPasswordEstaOk === false) { 
          console.log("pass erronea");
          return res.status(401).send();
        }
  
        const payloadJwt = {
          uuid: result.uuid,
        };
    
        const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
        const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, { expiresIn: jwtTokenExpiration });
        const response = {
          accessToken: token,
          expiresIn: jwtTokenExpiration,
          role: result.id_rol
        };
    
        return res.status(200).json(response);
      }
  
       catch (e) {
      console.log(e);
      return res.status(500).send(e.message);
    }
}
  
  module.exports = login;
  
  