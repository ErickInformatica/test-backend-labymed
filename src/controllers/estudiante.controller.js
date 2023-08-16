// const Estudiante = require("../models/estudiante.model");
const db = require("../../index");
const Estudiante = db.Estudiante;

// TRAE TODOS LOS ESTUDIANTES
exports.getAllEstudiantes = (req, res) => {
  Estudiante.findAll()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// CREAR ESTUDIANTES
exports.AddEstudiante = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "Debe ingresar el nombre.",
    });
    return;
  }

  const estModel = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    nivel: req.body.nivel,
    seccion: req.body.seccion,
  };

  Estudiante.create(estModel)
    .then((result) => {
      res.status(200).send({ message: "Estudiante Creado.", data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ACTUALIZA UN ESTUDIANTE
exports.UpdateEstudiante = (req, res) => {
  const idEstudiante = req.params.idEst;

  Estudiante.update(req.body, {
    where: { idEstudiante: idEstudiante },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Estudiante actualizado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede actualizar el Estudiante con el id = ${idEstudiante}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ELIMINA UN ESTUDIANTE
exports.deleteEstudiante = (req, res) => {
  const idEstudiante = req.params.idEst;

  Estudiante.destroy({
    where: { idEstudiante: idEstudiante },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Estudiante eliminado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede eliminar el Estudiante con el id = ${idEstudiante}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
