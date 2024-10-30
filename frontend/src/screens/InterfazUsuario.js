import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/styles';

const UserInterfaceScreen = ({navigation}) => {
    const [inputText, setInputText] = useState('');
    const [patients, setPatients] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Cargar los pacientes guardados desde AsyncStorage al montar el componente
    useEffect(() => {
        const loadPatients = async () => {
            try {
                const storedPatients = await AsyncStorage.getItem('patients');
                if (storedPatients) {
                    setPatients(JSON.parse(storedPatients));
                }
            } catch (error) {
                console.error("Error cargando pacientes desde AsyncStorage", error);
            }
        };
        loadPatients();
    }, []);

    // Guardar los pacientes en AsyncStorage cuando se actualicen
    useEffect(() => {
        const savePatients = async () => {
            try {
                await AsyncStorage.setItem('patients', JSON.stringify(patients));
            } catch (error) {
                console.error("Error guardando pacientes en AsyncStorage", error);
            }
        };
        if (patients.length > 0) {
            savePatients();
        }
    }, [patients]);

    // Función para agregar o actualizar un paciente
    const addPatient = () => {
        if (inputText.trim()) {
            if (editingId !== null) {
                const updatedPatients = patients.map(patient =>
                    patient.id === editingId ? { id: patient.id, name: inputText } : patient
                );
                setPatients(updatedPatients);
                setEditingId(null);
            } else {
                setPatients([...patients, { id: patients.length.toString(), name: inputText }]);
            }
            setInputText('');
        }
    };

    // Función para editar un paciente
    const editPatient = (id) => {
        const patient = patients.find(p => p.id === id);
        setInputText(patient.name);
        setEditingId(id);
    };

    // Función para eliminar un paciente
    const deletePatient = (id) => {
        Alert.alert(
            "Eliminar Paciente",
            "¿Estás seguro de que deseas eliminar este paciente?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Eliminar",
                    onPress: () => {
                        const updatedPatients = patients.filter(patient => patient.id !== id);
                        setPatients(updatedPatients);
                    },
                    style: "destructive"
                }
            ]
        );
    };

    return (
        <View contentContainerStyle={styles.container}>
            <Text style={styles.title}>Gestión de Pacientes</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre del paciente"
                placeholderTextColor="#999"
                value={inputText}
                onChangeText={setInputText}
            />

            <TouchableOpacity style={styles.button} onPress={addPatient}>
                <Text style={styles.buttonText}>{editingId !== null ? 'Actualizar Paciente' : 'Agregar Paciente'}</Text>
            </TouchableOpacity>

            <Text style={styles.patientCount}>Pacientes registrados: {patients.length}</Text>

            <FlatList
                data={patients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <View style={styles.crudContainer}>
                            <TouchableOpacity onPress={() => editPatient(item.id)} style={styles.crudButton}>
                                <Text style={styles.crudButtonText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => deletePatient(item.id)} style={styles.crudButton}>
                                <Text style={styles.crudButtonText}>Eliminar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default UserInterfaceScreen;
