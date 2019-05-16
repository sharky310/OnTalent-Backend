'use strict'


//Imports libraries and frameworks
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = 3000;
const routers = require('./brain/routes');

const psql = require('./database/psql-pool');

//
//Middleware
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send({
    error: `Body parser: ${err.message}`,
  });
});

app.use('/api', routers.accountRouter);
// app.use('/api', routers.postRouter);
// app.use('/api', routers.userRouter);


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
  try {
    // psql.check();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

    app.listen(port, () => {
        console.log(`The backend server is running in ${port}. Have a nice day`);
    });
}

init();
