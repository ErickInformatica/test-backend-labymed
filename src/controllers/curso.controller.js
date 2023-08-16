const Curso = require("../models/curso.model");

// TRAE TODOS LOS CURSOS
exports.getAllCursos = (req, res) => {
  Curso.findAll()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// CREAR CURSO
exports.AddCurso = (req, res) => {
  if (!req.body.nombreCurso) {
    res.status(400).send({
      message: "Debe ingresar el nombre del curso.",
    });
    return;
  }

  const curModel = {
    nombreCurso: req.body.nombreCurso
  };

  Curso.create(curModel)
    .then((result) => {
      res.status(200).send({ message: "Curso Creado.", data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ACTUALIZA UN CURSO
exports.UpdateCurso = (req, res) => {
  const idCurso = req.params.idCur;

  Curso.update(req.body, {
    where: { idCurso: idCurso },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Curso actualizado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede actualizar el Curso con el id = ${idCurso}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ELIMINA UN CURSO
exports.deleteCurso = (req, res) => {
  const idCurso = req.params.idCur;

  Curso.destroy({
    where: { idCurso: idCurso },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Curso eliminado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede eliminar el Curso con el id = ${idCurso}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
