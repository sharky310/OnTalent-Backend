const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const department = psqlPool.define('department',{
    id_department:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    name_department:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false
});


module.exports = department;

