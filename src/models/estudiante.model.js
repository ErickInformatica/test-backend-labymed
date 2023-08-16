module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define("ESTUDIANTE", {
      idEstudiante: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
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
    },
    { timestamps: false });
  
    return Estudiante;
  };