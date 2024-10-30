import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreenMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a la Clínica Pediátrica</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileScreen')}>
                <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SettingsScreen')}>
                <Text style={styles.buttonText}>Configuración</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AppointmentScreen')}>
                <Text style={styles.buttonText}>Citas</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MedicalHistoryScreen')}>
                <Text style={styles.buttonText}>Historial Médico</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserInterfacesScreen')}>
                <Text style={styles.buttonText}>Interfaz de usuario</Text>
            </TouchableOpacity>

            <View style={styles.spacer} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PatientList')}>
                <Text style={styles.buttonText}>Pacientes</Text>
            </TouchableOpacity>



            <View style={styles.spacer} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 40,
        color: '#333',
        textAlign: 'center',
    },
    spacer: {
        height: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#b1291d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreenMenu;
