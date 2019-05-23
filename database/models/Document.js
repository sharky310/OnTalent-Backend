const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const document = psqlPool.define('Documents',{
    id_document:{
        type: Sequelize.NUMBER,
        primaryKey: true    
    },
    name:{
        type: Sequelize.TEXT,
    },
    type:{
        type: Sequelize.TEXT,

    },
    id_user:{
        type: Sequelize.TEXT,

    },
},{
    timestamps: false,
    freezeTableName: true,
});

//TODO included foreign keys


module.exports = document;

