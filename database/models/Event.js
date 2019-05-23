const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const event = psqlPool.define('Events',{
    id_event:{
        type: Sequelize.TEXT,
        primaryKey: true    
    },
    name:{
        type: Sequelize.TEXT,
    },
    type:{
        type: Sequelize.TEXT,

    },
    date:{
        type: Sequelize.DATE,

    },
},{
    timestamps: false,
    freezeTableName: true,
});

//TODO included foreign keys


module.exports = event;

