const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

//const rol = require('./Rol');

const user = psqlPool.define('Users',{
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
    timestamps: false,
    freezeTableName: true,
});

//TODO included relations

// rol.hasMany(user, {foreingKey: 'id_rol', sourceKey: 'id'});
// user.belongsTo(rol, {foreingKey: 'id_rol', sourceKey: 'id'});

module.exports = user;