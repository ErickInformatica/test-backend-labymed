const Sequelize = require("sequelize");
const sequelize = new Sequelize("test-back", 'ebran', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./src/models/estudiante.model.js")(sequelize, Sequelize);

module.exports = db;