const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const taskList = psqlPool.define('TaskLists',{
    id_user:{
        type: Sequelize.TEXT,
        primaryKey: true    
    },
    task:{
        type: Sequelize.TEXT,
    },
    limit_date:{
        type: Sequelize.DATE,
    }
},{
    timestamps: false,
    freezeTableName: true,
});

//TODO included foreign keys


module.exports = taskList;

