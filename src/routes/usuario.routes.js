const usuario = require('../controllers/usuario.controller');
const express = require('express');

const md_autenticacion = require("../middlewares/autheticated");

const api = express.Router();

api.post('/login', usuario.login);
api.get('/usuarios', md_autenticacion.ensureAuth ,usuario.getAllUsuarios);
api.post('/usuario',md_autenticacion.ensureAuth , usuario.AddUsuario);
api.put('/usuario/:idUser',md_autenticacion.ensureAuth , usuario.UpdateUsuario);
api.delete('/usuario/:idUser',md_autenticacion.ensureAuth , usuario.deleteUsuario);

module.exports = api;