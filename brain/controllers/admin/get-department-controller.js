'use strict'

const deparment = require('../../../database/models/Department');

async function getDeparment(req, res, next) {

    try{
    const departments = await deparment.findAll();
    res.json({
        data: departments
    });
} catch(e){
    res.status(400).send(e);
}

}

module.exports = getDeparment;