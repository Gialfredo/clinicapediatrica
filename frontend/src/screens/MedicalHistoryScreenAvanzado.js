import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MedicalHistoryScreen = ({navigation}) => {
    const medicalHistory = [
        { date: '2024-08-01', diagnosis: 'Fiebre', treatment: 'Paracetamol', notes: 'Revisión en una semana' },
        { date: '2024-07-15', diagnosis: 'Gripe', treatment: 'Reposo e hidratación', notes: 'Tomar líquidos abundantes' },
        { date: '2024-06-10', diagnosis: 'Alergia', treatment: 'Antihistamínicos', notes: 'Evitar alérgenos conocidos' },
        // Añadir más entradas según sea necesario
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historia Clínica</Text>
            <FlatList
                data={medicalHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.entryContainer}>
                        <Text style={styles.entryTitle}>{item.date}</Text>
                        <Text style={styles.entryText}>Diagnóstico: {item.diagnosis}</Text>
                        <Text style={styles.entryText}>Tratamiento: {item.treatment}</Text>
                        <Text style={styles.entryText}>Notas: {item.notes}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    entryContainer: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    entryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    entryText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default MedicalHistoryScreen;