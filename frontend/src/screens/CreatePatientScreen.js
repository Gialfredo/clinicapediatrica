import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import api from '../api';

const CreatePatientScreen = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleCreatePatient = async () => {
    try {
      const response = await api.post('/patients', {
        nombre,
        edad,
        direccion,
        telefono,
      });
      setMessage('Paciente creado exitosamente');
    } catch (err) {
      setError('Error al crear el paciente');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Dirección" value={direccion} onChangeText={setDireccion} style={styles.input} />
      <TextInput placeholder="Teléfono" value={telefono} onChangeText={setTelefono} style={styles.input} keyboardType="phone-pad" />
      <Button title="Crear Paciente" onPress={handleCreatePatient} />
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

export default CreatePatientScreen;
