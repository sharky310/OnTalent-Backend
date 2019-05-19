'use strict'

const Sequelize = require('sequelize') ;


const config = {
      user: process.env.POSTGRESQL_USER,
      host: process.env.POSTGRESQL_HOST,
      database: process.env.POSTGRESQL_DATABASE,
      password: process.env.POSTGRESQL_PASSWORD,
      port: process.env.POSTGRESQL_PORT,
      dialect: process.env.DIALECT,
}

const psqlPool = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    //TODO reduce config const and use external info in the pool object
    pool:{
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    },
    logging: false, //This property hide message for terminal
  }
)



  module.exports = {
    psqlPool,
  };
  
  