module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("USUARIO", {
      usuario: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      }
    });
  
    return Usuario;
  };