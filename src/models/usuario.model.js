module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("USUARIOS", {
      idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      usuario: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      }
    },
    { timestamps: false });
  
    return Usuario;
  };