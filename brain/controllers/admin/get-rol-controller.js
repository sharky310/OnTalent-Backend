'use strict'

const rol = require('../../../database/models/Rol');

async function getRol(req, res, next) {

    try{

    const rols = await rol.findAll();
    res.json({
        data: rols
    });
    
} catch(e){
    res.status(400).send(e);
}
}   

module.exports = getRol;