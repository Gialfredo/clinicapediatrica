import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, FlatList } from 'react-native';

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
                value={inputText}
                onChangeText={setInputText}
            />
            <Button title="Agregar Paciente" onPress={addPatient} />
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
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
    },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        width: '100%',
    },
    itemText: {
        fontSize: 18,
    },
});

export default UserInterfaceScreen;
