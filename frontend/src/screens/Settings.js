import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SettingScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Configuración</Text>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="user" size={24} color="#fff" />
                <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="bell" size={24} color="#fff" />
                <Text style={styles.buttonText}>Notificaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="paint-brush" size={24} color="#fff" />
                <Text style={styles.buttonText}>Preferencias de Tema</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="language" size={24} color="#fff" />
                <Text style={styles.buttonText}>Idioma</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="lock" size={24} color="#fff" />
                <Text style={styles.buttonText}>Cambiar Contraseña</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="info-circle" size={24} color="#fff" />
                <Text style={styles.buttonText}>Acerca de la Aplicación</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => { }}>
                <FontAwesome name="sign-out" size={24} color="#fff" />
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#e57373' }]} onPress={() => { }}>
                <FontAwesome name="trash" size={24} color="#fff" />
                <Text style={styles.buttonText}>Eliminar Cuenta</Text>
            </TouchableOpacity>
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
        color: '#1E88E5',
        marginBottom: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E88E5',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
});

export default SettingScreen;
