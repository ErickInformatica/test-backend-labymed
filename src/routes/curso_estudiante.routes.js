const cursoEstudiante = require('../controllers/curso_estudiante.controller');
const express = require('express');

const api = express.Router();

api.get('/cursoEstudiante/:idEst', cursoEstudiante.getAllCursosEstudiante);
api.post('/cursoEstudiante', cursoEstudiante.AddCursoEstudiante);
api.put('/cursoEstudiante/:idEst', cursoEstudiante.UpdateCursoEstudiante);
api.delete('/cursoEstudiante/:idEst/:idCur', cursoEstudiante.deleteCursoEstudiante);

module.exports = api;