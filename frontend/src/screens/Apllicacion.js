import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../context/UserContext';

const ProfileScreen = () => {
    const { userName } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil del Usuario</Text>
            <Text style={styles.label}>Nombre: {userName}</Text>
            <Text style={styles.label}>Especialidad: Pediatría</Text>
            <Text style={styles.label}>Correo: lito.lopez@clinica.com</Text>
        </View>
    );
};

export default ProfileScreen;




