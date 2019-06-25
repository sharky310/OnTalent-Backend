'use strict'

const event = require('../../../database/models/Event');
const sendConfirmationMail = require('../../../mail/send-confirmation-mail');

async function createEvent(req, res, next) {
    const {name, type, id_event} = {...req.body}; // eventData is in JSON format

    const stringData = new Date();
    console.log(req.body);
    try{
      let newEvent = await event.create({
        name,
        type,
        id_event,
        date: new Date()+3 //TODO change value insert for value obtanin
      });

      res.status(201).send("The event is created succesfully");
    } catch (e){
      res.status(400).send("An error has ocurred: "+e);
    }
}

module.exports = createEvent;