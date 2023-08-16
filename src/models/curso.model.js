module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("CURSO", {
      idCurso: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombreCurso: {
        type: Sequelize.STRING
      }
    },
    { timestamps: false });
  
    return Curso;
  };