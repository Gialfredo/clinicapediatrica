import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AdminProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/admin-pic.png')} style={styles.profileImage} />
            <Text style={styles.title}>Perfil del Administrador</Text>
            <View style={styles.infoContainer}>
                <FontAwesome name="user" size={24} color="#1E88E5" />
                <Text style={styles.label}>Nombre: Lito López</Text>
            </View>
            <View style={styles.infoContainer}>
                <FontAwesome name="briefcase" size={24} color="#1E88E5" />
                <Text style={styles.label}>Rol: Administrador</Text>
            </View>
            <View style={styles.infoContainer}>
                <FontAwesome name="envelope" size={24} color="#1E88E5" />
                <Text style={styles.label}>Correo: lito.lopez@clinica.com</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#E3F2FD',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#1E88E5',
    },
    title: {
        fontSize: 28,
        color: '#1E88E5',
        marginBottom: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    label: {
        fontSize: 18,
        marginLeft: 10,
        color: '#333',
    },
});

export default AdminProfileScreen;
