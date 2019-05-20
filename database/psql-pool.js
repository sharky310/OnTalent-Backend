'use strict'

const Sequelize = require('sequelize') ;

const psqlPool = new Sequelize(
  process.env.POSTGRESQL_DATABASE,
  process.env.POSTGRESQL_USER,
  process.env.POSTGRESQL_PASSWORD,
  {
    host: process.env.POSTGRESQL_HOST,
    dialect: process.env.DIALECT,
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
  
  