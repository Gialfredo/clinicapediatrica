import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import axios from 'axios';



const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            
            const response = await axios.post('http://172.16.16.100:5000/api/login', {
                username,
                password, 
            });
             if (response.data.message == 'LOGIN EXITOSO'){
                navigation.navigate('Inicio');
             }
        } catch (error){
            Alert.alert('Error', 'Credenciales inválidas');
        }
        
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/clinic-logo.png')} style={styles.logo} />
            <Text style={styles.title}>Clínica Pediátrica</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3F2FD',
        padding: 20,
    },
    logo: {
        width: 120,  // Aumenta ligeramente el tamaño
        height: 120,
        marginBottom: 30,
        borderRadius: 60,  // Hace que la imagen sea redonda si es cuadrada
        shadowColor: "#000",  // Agrega sombra
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,  // Para sombra en Android
    },
    title: {
        fontSize: 28,
        color: '#1E88E5',
        marginBottom: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: '#BBDEFB',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#64B5F6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;



    
