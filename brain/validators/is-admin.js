const rol = require('../../database/models/Rol');

/**
 * This functions return that idRol is value of Rol name in database
 * @deprecated
 * @param {} idRol 
 */
function isAdmin(idRol){

    const result = await rol.findOne({
        where:{
            id_rol: idRol,
        }   
    });

    return (result.name_rol === "Admin");


}

module.exports = isAdmin;