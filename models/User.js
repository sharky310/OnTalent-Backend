const Sequelize = require('sequelize');

const {psqlPool} = require('../database/psql-pool');

const task = require('./Rol');

const user = psqlPool.define('users',{
    uuid:{
        type: Sequelize.TEXT,
        primaryKey: true
    },
    first_name:{
        type: Sequelize.TEXT,
    },
    last_name:{
        type: Sequelize.TEXT,
    },
    email:{
        type: Sequelize.TEXT,
    },
    id:{
        type: Sequelize.TEXT,
    },
    account_activate:{
        type: Sequelize.DATE,
    },
    id_rol:{
        type: Sequelize.NUMBER,
    },
    id_dpt:{
        type: Sequelize.NUMBER,
    }
},{
    timestamps: false
});

department.hasMany(user, {foreingKey: 'id_rol', sourceKey: 'id'});
user.belongsTo(department, {foreingKey: 'id_rol', sourceKey: 'id'});

module.exports = user;