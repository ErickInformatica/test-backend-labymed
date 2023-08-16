const Sequelize = require("sequelize");
const sequelize = new Sequelize("test-back", 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require("./src/models/usuario.model.js")(sequelize, Sequelize);
db.Curso = require("./src/models/curso.model.js")(sequelize, Sequelize);
db.Estudiante = require("./src/models/estudiante.model.js")(sequelize, Sequelize);
db.CursoEstudiante = require("./src/models/curso_estudiante.model.js")(sequelize, Sequelize);


module.exports = db;