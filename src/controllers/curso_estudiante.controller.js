const CursoEstudiante = require("../models/curso_estudiante.model");

// TRAE TODOS LOS CURSOS POR ESTUDIANTE
exports.getAllCursosEstudiante = (req, res) => {
  const idEstudiante = req.params.idEst;

    CursoEstudiante.findAll({ where:{ idEstudiante: idEstudiante} })
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


// ASIGNAR CURSO A ESTUDIANTE
exports.AddCursoEstudiante = (req, res) => {
  const curModel = {
    idEstudiante: req.body.idEst,
    idCurso: req.body.idCur
  };

  CursoEstudiante.create(curModel)
    .then((result) => {
      res.status(200).send({ message: "Curso Asignado a Estudiante Creado.", data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ACTUALIZA UN CURSO ASIGNADO A ESTUDIANTE
exports.UpdateCursoEstudiante = (req, res) => {
  const idEstudiante = req.params.idEst;

  const curModel = {
    idCurso: req.body.idCur
  };

  CursoEstudiante.update(curModel, {
    where: { idEstudiante: idEstudiante },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Curso Asignado actualizado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede actualizar el Curso Asignado al Estudiante con el id = ${idEstudiante}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ELIMINA UN CURSO
exports.deleteCursoEstudiante = (req, res) => {
  const idCurso = req.params.idCur;
  const idEstudiante = req.params.idEst;

  CursoEstudiante.destroy({
    where: { idCurso: idCurso, idEstudiante: idEstudiante },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Curso asignado eliminado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede eliminar el Curso Asignado con el id = ${idCurso}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};



