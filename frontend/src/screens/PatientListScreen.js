import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import api from './api'; // Importa la instancia de Axios

const PatientListScreen = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  // Realizar la solicitud GET para obtener pacientes
  const fetchPatients = async () => {
    try {
      const response = await api.get('/patients');
      setPatients(response.data); // Almacenar la lista de pacientes en el estado
    } catch (err) {
      setError('Error al obtener pacientes');
    }
  };

  // Función para eliminar un paciente
  const handleDeletePatient = async (id) => {
    try {
      await api.delete(`/patients/${id}`);
      setPatients(patients.filter((patient) => patient._id !== id));  // Actualiza la lista después de eliminar
      Alert.alert('Éxito', 'Paciente eliminado correctamente');
    } catch (err) {
      setError('Error al eliminar paciente');
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <View style={styles.container}>
      {error ? <Text>{error}</Text> : null}
      <FlatList
        data={patients}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.patientContainer}>
            <Text>{item.nombre}</Text>
            <Button
              title="Eliminar"
              onPress={() => handleDeletePatient(item._id)} // Botón para eliminar
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  patientContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default PatientListScreen;
