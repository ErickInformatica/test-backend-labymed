module.exports = (sequelize, Sequelize) => {
    const Curso_Estudiante = sequelize.define("CURSO_ESTUDIANTE", {
      idCursoEstudiante: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idEstudiante: {
        type: Sequelize.INTEGER
      },
      idCurso: {
        type: Sequelize.INTEGER
      }
    },
    { timestamps: false });
  
    return Curso_Estudiante;
  };