module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("CURSO", {
      nombreCurso: {
        type: Sequelize.STRING
      }
    });
  
    return Curso;
  };