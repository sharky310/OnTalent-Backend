const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const attendance = psqlPool.define('Attendance',{
    id_listener:{
        type: Sequelize.TEXT,  
    },
    id_speaker:{
        type: Sequelize.TEXT,
    },
    id_event:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false,
    freezeTableName: true,
});

//TODO included foreign keys


module.exports = attendance;

