'use strict'


//Imports libraries and frameworks
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = 3000;

//Middleware
app.use(bodyParser.json());

//Init backend
function init(){

    app.listen(port => {
        console.log(`The backend server is running in ${port}. Have a nice day`);
    });
}

init();
