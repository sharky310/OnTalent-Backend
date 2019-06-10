
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
    /**
     * Validar datos de entrada con Joi
     */

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
        console.log(accountData.email);
        const result = await user.findOne({
            where:{
                email: accountData.email,
            }   
        });
  
        /*
        result es esto:
        {
    id: 66,
    uuid: 'fb66233b-23b4-46ad-bdf3-51e65dbb2f8e',
    email: 'josetest@yopmail.com',
    password:
     '$2b$10$lW7xAAZSs2TnaX7Ua.7LGOa4bHpBQ53ig2TWRdS.EMB8XihVcckrO',
    activated_at: 2019-03-01T19:00:57.000Z 
  }
    */
        if (result.activated_at!=null) {
          const accountNotActivated = new AccountNotActivatedError('you need to confirm the verification link');
  
          // throw accountNotActivated; // throw new AccountNotActivatedError()
  
          return next(accountNotActivated);
        }
  
        /**
         * Paso3: La clave es valida?
         */
        const laPasswordEstaOk = await bcrypt.compare(accountData.password,result.password);
        if (laPasswordEstaOk === false) { // !laPasswordEstaOk
          return res.status(401).send();
        }
  
        /**
         * Paso 4: Generar token JWT con uuid + role (admin) asociado al token
         * La duración del token es de 1 minuto (podria ir en variable de entorno)
         */
        const payloadJwt = {
          uuid: result.uuid,
          role: 'admin', // userData.role si viene de bbdd
        };
    
        const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
        const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, { expiresIn: jwtTokenExpiration });
        const response = {
          accessToken: token,
          expiresIn: jwtTokenExpiration,
        };
    
        return res.status(200).json(response);
      }
  
       catch (e) {
      console.log(e);
      return res.status(500).send(e.message);
    }
}
  
  module.exports = login;
  
  