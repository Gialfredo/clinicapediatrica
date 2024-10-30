import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';

const UserInterfaceScreen = () => {
    const [inputText, setInputText] = useState('');
    const [patients, setPatients] = useState([]);

    const addPatient = () => {
        if (inputText.trim()) {
            setPatients([...patients, { id: patients.length.toString(), name: inputText }]);
            setInputText('');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Ingreso de Datos de Pacientes</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre del paciente"
                placeholderTextColor="#999"
                value={inputText}
                onChangeText={setInputText}
            />

            <TouchableOpacity style={styles.button} onPress={addPatient}>
                <Text style={styles.buttonText}>Agregar Paciente</Text>
            </TouchableOpacity>

            <Text style={styles.patientCount}>Pacientes agregados: {patients.length}</Text>

            <FlatList
                data={patients}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#E3F2FD',
    },
    title: {
        fontSize: 28,
        marginBottom: 30,
        color: '#1E88E5',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#BBDEFB',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#1E88E5',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    patientCount: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    itemContainer: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
});

export default UserInterfaceScreen;
