const Sequelize = require('sequelize');

const {psqlPool} = require('../database/psql-pool');

const rol = psqlPool.define('rol',{
    id_rol:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    name_rol:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false
});

module.exports = rol;
