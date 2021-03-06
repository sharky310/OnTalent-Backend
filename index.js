'use strict'


/**
 * Imports libraries and frameworks
 */
require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const PORT = (process.env.PORT || 3000);

const app = express();
const nexus = '/api'
const routers = require('./brain/routes');

/**
 * Special middleware for config cors
 */
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


app.use(bodyParser.json());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send({
    error: `Body parser: ${err.message}`,
  });
});


/**
 * Routes
 */
app.use(nexus, routers.accountRouter);
app.use(nexus, routers.adminRouter);
app.use(nexus, routers.userRouter);
app.use(nexus, routers.eventRouter);
app.use(nexus, routers.documentRouter);
app.use(nexus, routers.taskRouter);




//Init server
function init() {

  app.listen(process.env.PORT, () => {
    console.log(`The backend server is running in ${process.env.PORT}. Have a nice day`);
  });
}

init();