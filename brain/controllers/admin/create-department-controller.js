'use strict'

const deparment = require('../../../database/models/Department');

async function createDeparment(req, res, next) {

    const {id_dept, name_dept} = {...req.body}; // accountData is in JSON format

    try{
      let newDeparment = await deparment.create({
        id_dept,
        name_dept,
      });
  
      res.status(201).send("The deparment is created succesfully");
    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}
  
module.exports = createDeparment;