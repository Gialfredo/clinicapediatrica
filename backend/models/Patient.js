const mongoose = require('mongoose');

// Definir el esquema de paciente
const patientSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    historialMedico: {
        type: String,
    },
});

module.exports = mongoose.model('Patient', patientSchema);
