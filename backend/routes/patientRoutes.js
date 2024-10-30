const express = require('express');
const { crearPaciente, obtenerPacientes, actualizarPaciente, eliminarPaciente } = require('../controllers/patientController');
const router = express.Router();

// Ruta para crear un paciente
router.post('/patients', crearPaciente);

// Ruta para obtener todos los pacientes
router.get('/patients', obtenerPacientes);

// Ruta para actualizar un paciente
router.put('/patients/:id', actualizarPaciente);

// Ruta para eliminar un paciente
router.delete('/patients/:id', eliminarPaciente);

module.exports = router;
