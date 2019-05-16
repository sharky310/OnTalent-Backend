'use strict'


//Imports libraries and frameworks
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = 3000;

//
//Middleware
app.use(bodyParser.json());

//Special middleware for config cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


//Init backend
function init(){

    app.listen(port => {
        console.log(`The backend server is running in ${port}. Have a nice day`);
    });
}

init();
