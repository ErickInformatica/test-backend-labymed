module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define("ESTUDIANTE", {
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      nivel: {
        type: Sequelize.STRING
      },
      seccion: {
        type: Sequelize.STRING
      }
    });
  
    return Estudiante;
  };