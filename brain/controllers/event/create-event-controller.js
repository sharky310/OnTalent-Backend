'use strict'

const event = require('../../../database/models/Event');
const sendConfirmationMail = require('../../../mail/send-confirmation-mail');

async function createEvent(req, res, next) {
    const {name, type} = {...req.body}; // eventData is in JSON format

    const stringData = new Date();

    try{
      let newEvent = await event.create({
        name,
        type,
        date: new Date() //TODO change value insert for value obtanin
      });

      res.status(201).send("The event is created succesfully");
    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}

module.exports = createEvent;