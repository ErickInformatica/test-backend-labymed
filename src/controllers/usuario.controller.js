const Usuario = require("../models/usuario.model");
const jwt = require('../services/jwt');

// LOGEAR
exports.login = (req, res) => {
    const params = req.body;

    Usuario.findOne({ usuario: params.usuario, contrasena: params.contrasena })
    .then((result) => {
        if(!result) res.status(500).send({ message: 'No se ha encontrado el usuario' });
        res.status(200).send({ token: jwt.createToken(result) });
        
      })
      .catch((err) => {
        res.status(500).send(err);
      });
}


// TRAE TODOS LOS USUARIOS
exports.getAllUsuarios = (req, res) => {
    Usuario.findAll()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// CREAR Usuario
exports.AddUsuario = (req, res) => {
  if (!req.body.usuario) {
    res.status(400).send({
      message: "Debe ingresar el usuario.",
    });
    return;
  }

  const userModel = {
    usuario: req.body.usuario,
    contrasena: req.body.contrasena
  };

  Usuario.create(userModel)
    .then((result) => {
      res.status(200).send({ message: "Usuario Creado.", data: result });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ACTUALIZA UN Usuario
exports.UpdateUsuario = (req, res) => {
  const idUsuario = req.params.idUser;

  Usuario.update(req.body, {
    where: { idUsuario: idUsuario },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Usuario actualizado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede actualizar el Usuario con el id = ${idUsuario}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// ELIMINA UN Usuario
exports.deleteUsuario = (req, res) => {
  const idUsuario = req.params.idUser;

  Usuario.destroy({
    where: { idUsuario: idUsuario },
  })
    .then((result) => {
      if (result == 1) {
        res.status(200).send({ message: "Usuario eliminado.", data: result });
      } else {
        res.status(500).send({
          message: `No se puede eliminar el Usuario con el id = ${idUsuario}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
