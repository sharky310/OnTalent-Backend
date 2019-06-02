const Sequelize = require('sequelize');

const {psqlPool} = require('../psql-pool');

const user = psqlPool.define('Users',{
    dni:{
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
    account_activated:{
        type: Sequelize.DATE,
    },
    id_rol:{
        type: Sequelize.NUMBER,
    },
    id_dpt:{
        type: Sequelize.NUMBER,
    },
    account_created:{
        type: Sequelize.DATE,
    },
    verification_code:{
        type: Sequelize.TEXT,
    },
    password:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false,
    freezeTableName: true,
});

//TODO included relations

// rol.hasMany(user, {foreingKey: 'id_rol', sourceKey: 'id'});
// user.belongsTo(rol, {foreingKey: 'id_rol', sourceKey: 'id'});

module.exports = user;