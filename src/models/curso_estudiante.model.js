module.exports = (sequelize, Sequelize) => {
    const Curso_Estudiante = sequelize.define("CURSO_ESTUDIANTE", {
      idEstudiante: {
        type: Sequelize.INTEGER
      },
      idCurso: {
        type: Sequelize.INTEGER
      }
    });
  
    return Curso_Estudiante;
  };