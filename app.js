const express = require("express");
const cors = require("cors");
const app = express();

// IMPORTACION RUTAS
const usuarios_route = require('./src/routes/usuario.routes');
const estudiante_route = require('./src/routes/estudiante.routes');
const curso_route = require('./src/routes/curso.routes');
const cursoEstudiante_route = require('./src/routes/curso_estudiante.routes');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api',usuarios_route ,estudiante_route, curso_route, cursoEstudiante_route);

const db = require("./index");
db.sequelize.sync()
  .then(() => {
    console.log("DB Sincronizada.");
  })
  .catch((err) => {
    console.log("Error en Sincronizacion de DB: " + err.message);
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor se encuentra corriendo en el puerto: ${PORT}.`);
});



