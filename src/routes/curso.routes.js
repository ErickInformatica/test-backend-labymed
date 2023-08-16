const curso = require('../controllers/curso.controller');
const express = require('express');

const api = express.Router();

api.get('/cursos', curso.getAllCursos);
api.post('/curso', curso.AddCurso);
api.put('/curso/:idCur', curso.UpdateCurso);
api.delete('/curso/:idCur', curso.deleteCurso);

module.exports = api;