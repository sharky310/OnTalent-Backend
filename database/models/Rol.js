const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const rol = psqlPool.define('Rols',{
    id_rol:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    name_rol:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false,
    freezeTableName: true,
});

module.exports = rol;
