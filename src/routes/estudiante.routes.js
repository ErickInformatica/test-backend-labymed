const estudiante = require('../controllers/estudiante.controller');
const express = require('express');

const api = express.Router();

api.get('/estudiantes', estudiante.getAllEstudiantes);
api.post('/estudiante', estudiante.AddEstudiante);
api.put('/estudiante/:idEst', estudiante.UpdateEstudiante);
api.delete('/estudiante/:idEst', estudiante.deleteEstudiante);

module.exports = api;