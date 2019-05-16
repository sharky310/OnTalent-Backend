'use strict'

const psql = require('pg');

async function connect(){

    const pool = new Pool({
        user: process.env.PQSL_USER,
        host: process.env.PSQL_HOST,
        database: process.env.PQSL_DATABASE,
        password: process.env.PQSL_PASSWORD,
        port: process.env.PQSL_PORT,
    })

    try {
        const client = await pool.connect();

        if (connection) {
            console.log("Postgresql is running");
          connection.release();
        }
      } catch (e) {
        console.error('Database pool connect', e);
        throw e;
      }
}

function getConnection() {
    console.log(process.env.PQSL_USER);
    if (this.pool === null) {
        throw new Error("PostgreSQL connection didn't established. You must connect first.");
    }
    return this.pool;
  }

  module.exports = {
    connect,
    getConnection,
  };
  
  