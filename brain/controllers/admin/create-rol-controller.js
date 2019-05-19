'use strict'

const rol = require('../../../database/models/Rol');

async function createRol(req, res, next) {

    const {id_rol, name_rol} = {...req.body}; // accountData is in JSON format

    try{
      let newRol = await rol.create({
        id_rol,
        name_rol,
      });
  
      res.status(201).send("The rol is created succesfully");
    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}
  
module.exports = createRol;