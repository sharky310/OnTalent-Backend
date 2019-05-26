'use strict'

const task = require('../../../database/models/TaskList');

async function createTask(req, res, next){

}

async function createInitTask(dni){
    console.log("Chega")
    try{
        const homework = await task.create({
          user_dni: dni,
          task: "Read welcome guide",
          limit_date: new Date()
        });
    } catch (e){
        console.log(e);
    }
}

module.exports = createInitTask;