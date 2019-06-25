'use strict'

const event = require('../../../database/models/Event');
const checkPassword = require('../../validators/check-password');   

async function getListEvent(req, res, next){

    /**
     * Validate the request data 
     */
    try{
        const listEvent = await event.findAll({});

        res.status(200).json(listEvent);

} catch(e){
    res.status(404).send(e);
}

}

module.exports = getListEvent;