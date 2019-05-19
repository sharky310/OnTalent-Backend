const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const department = psqlPool.define('Departments',{
    id_dept:{
        type: Sequelize.NUMBER,
        primaryKey: true
    },
    name_dept:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false,
    freezeTableName: true,
});


module.exports = department;

