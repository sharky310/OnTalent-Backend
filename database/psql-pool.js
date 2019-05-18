'use strict'

const psql = require('pg').Pool;
  
// const  pool =  new psql({
//     user: process.env.POSTGRESQL_USER,
//     host: process.env.POSTGRESQL_HOST,
//     database: process.env.POSTGRESQL_DATABASE,
//     password: process.env.POSTGRESQL_PASSWORD,
//     port: process.env.POSTGRESQL_PORT,
//   });

const config = {
  user: process.env.POSTGRESQL_USER,
      host: process.env.POSTGRESQL_HOST,
      database: process.env.POSTGRESQL_DATABASE,
      password: process.env.POSTGRESQL_PASSWORD,
      port: process.env.POSTGRESQL_PORT,
}
  
  try {
    if (pool) {
      console.log(`The database is running in port ${pool.options.port}. Your info is available`);
    }
  } catch (e) {
    console.error('Database pool connect', e);
    throw e;
  }


//TODO I need check that the connection is finished
function check(){

  try{
    pool.query('SELECT * FROM rol', (err, res) => {
      console.log(res);
      pool.end();
  })
}
  catch (e){
    console.error('Database pool connect', e);
    throw e;
  }

}

  module.exports = {
    check,
    pool,
  };
  
  