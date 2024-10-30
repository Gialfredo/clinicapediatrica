import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import api from '../api';

const UpdatePatientScreen = ({ route }) => {
  const { id } = route.params;
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await api.get(`/patients/${id}`);
        const patient = response.data;
        setNombre(patient.nombre);
        setEdad(String(patient.edad));
        setDireccion(patient.direccion);
        setTelefono(patient.telefono);
      } catch (err) {
        setError('Error al obtener paciente');
      }
    };
    fetchPatient();
  }, [id]);

  const handleUpdatePatient = async () => {
    try {
      const response = await api.put(`/patients/${id}`, {
        nombre,
        edad,
        direccion,
        telefono,
      });
      setMessage('Paciente actualizado exitosamente');
    } catch (err) {
      setError('Error al actualizar el paciente');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Dirección" value={direccion} onChangeText={setDireccion} style={styles.input} />
      <TextInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} style={styles.input} keyboardType="phone-pad" />
      <Button title="Actualizar Paciente" onPress={handleUpdatePatient} />
      {message ? <Text>{message}</Text> : null}
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default UpdatePatientScreen;
