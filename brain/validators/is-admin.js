const rol = require('../../database/models/Rol');


function isAdmin(idRol){

    const result = await rol.findOne({
        where:{
            id_rol: idRol,
        }   
    });

    return (result.name_rol === "Admin");


}

module.exports = isAdmin;