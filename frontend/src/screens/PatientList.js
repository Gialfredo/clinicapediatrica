import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, StyleSheet, Alert } from 'react-native';
import Modal from 'react-native-modal';
import api from './api'; // Asegúrate de tener configurada la instancia de Axios

const PatientListScreen = () => {
    const [patients, setPatients] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [historialMedico, setHistorialMedico] = useState('');
    const [editingId, setEditingId] = useState(null); // Para editar

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await api.get('/patients');
                setPatients(response.data);
            } catch (error) {
                console.error('Error al obtener pacientes', error);
            }
        };
        fetchPatients();
    }, []);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const showAlert = (title, message) => {
        Alert.alert(title, message, [{ text: 'OK' }], { cancelable: true });
    };

    const handleAddPatient = async () => {
        if (!nombre || !edad || !direccion || !telefono) {
            alert('Todos los campos son obligatorios');
            return;
        }

        try {
            if (editingId) {
                // Actualizar paciente
                const response = await api.put(`/patients/${editingId}`, {
                    nombre,
                    edad,
                    direccion,
                    telefono,
                    historialMedico,
                });
                setPatients(
                    patients.map((patient) =>
                        patient._id === editingId ? response.data.paciente : patient
                    )
                );
                showAlert('Paciente Actualizado', 'El paciente ha sido actualizado correctamente.');
            } else {
                // Crear nuevo paciente
                const response = await api.post('/patients', {
                    nombre,
                    edad,
                    direccion,
                    telefono,
                    historialMedico,
                });
                setPatients([...patients, response.data.paciente]);
                showAlert('Paciente Guardado', 'El paciente ha sido guardado correctamente.');
            }

            toggleModal();
            setNombre('');
            setEdad('');
            setDireccion('');
            setTelefono('');
            setHistorialMedico('');
            setEditingId(null); // Limpiar el estado de edición
        } catch (error) {
            alert('Error al guardar paciente');
        }
    };

    const handleDeletePatient = async (id) => {
        Alert.alert(
            'Confirmar Eliminación',
            '¿Estás seguro de que deseas eliminar este paciente?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await api.delete(`/patients/${id}`);
                            setPatients(patients.filter((patient) => patient._id !== id));
                            showAlert('Paciente Eliminado', 'El paciente ha sido eliminado correctamente.');
                        } catch (error) {
                            alert('Error al eliminar paciente');
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    const handleEditPatient = (patient) => {
        setNombre(patient.nombre);
        setEdad(String(patient.edad));
        setDireccion(patient.direccion);
        setTelefono(patient.telefono);
        setHistorialMedico(patient.historialMedico || '');
        setEditingId(patient._id);
        toggleModal();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gestión de Pacientes</Text>

            <FlatList
                data={patients}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.patientContainer}>
                        <Text>Nombre: {item.nombre}</Text>
                        <Text>Edad: {item.edad}</Text>
                        <Text>Dirección: {item.direccion}</Text>
                        <Text>Teléfono: {item.telefono}</Text>
                        <Text>Historial Médico: {item.historialMedico || 'No especificado'}</Text>

                        <View style={styles.crudContainer}>
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => handleEditPatient(item)}>
                                <Text style={styles.buttonText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => handleDeletePatient(item._id)}>
                                <Text style={styles.buttonText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
                <Text style={styles.buttonText}>Agregar Paciente</Text>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                        {editingId ? 'Editar Paciente' : 'Agregar Paciente'}
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Edad"
                        value={edad}
                        onChangeText={setEdad}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Dirección"
                        value={direccion}
                        onChangeText={setDireccion}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        value={telefono}
                        onChangeText={setTelefono}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Historial Médico"
                        value={historialMedico}
                        onChangeText={setHistorialMedico}
                    />

                    <View style={styles.modalButtons}>
                        <TouchableOpacity style={styles.modalButton} onPress={handleAddPatient}>
                            <Text style={styles.modalButtonText}>Guardar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                            <Text style={styles.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    patientContainer: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
    },
    crudContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#FFA500',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PatientListScreen;
