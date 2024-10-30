const mongoose = require('mongoose');
const Patient = require('../models/Patient');

// Crear un nuevo paciente
const crearPaciente = async (req, res) => {
    try {
        const nuevoPaciente = new Patient(req.body);
        await nuevoPaciente.save();
        res.status(201).json({ message: 'Paciente creado exitosamente', paciente: nuevoPaciente });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el paciente', error });
    }
};

// Obtener todos los pacientes
const obtenerPacientes = async (req, res) => {
    try {
        const pacientes = await Patient.find();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pacientes', error });
    }
};

// Actualizar un paciente
const actualizarPaciente = async (req, res) => {
    try {
        // Log para verificar el ID recibido
        console.log("ID recibido: ", req.params.id);

        // Log para verificar el body recibido
        console.log("Datos del paciente recibidos: ", req.body);

        // Actualizar el paciente en la base de datos
        const pacienteActualizado = await Patient.findByIdAndUpdate(
            req.params.id,        // El id del paciente a actualizar
            req.body,             // Los nuevos datos que serán actualizados
            { new: true }         // Para que devuelva el paciente actualizado
        );

        // Verificar si el paciente fue encontrado y actualizado
        if (!pacienteActualizado) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }

        // Si la actualización fue exitosa, devolver el paciente actualizado
        res.status(200).json({ message: 'Paciente actualizado', paciente: pacienteActualizado });

    } catch (error) {
        // Imprimir error 
        console.error("Error al actualizar el paciente:", error);
        res.status(500).json({ message: 'Error al actualizar el paciente', error });
    }
};



// Eliminar un paciente
const eliminarPaciente = async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Paciente eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el paciente', error });
    }
};

module.exports = {
    crearPaciente,
    obtenerPacientes,
    actualizarPaciente,
    eliminarPaciente,
};
