import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Profiles = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Perfiles</Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileAdmin')}>
                <FontAwesome name="user" size={24} color="#fff" />
                <Text style={styles.buttonText}>Administrador</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileDoc')}>
                <FontAwesome name="user" size={24} color="#fff" />
                <Text style={styles.buttonText}>Doctor/es</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfilePatient')}>
                <FontAwesome name="user" size={24} color="#fff" />
                <Text style={styles.buttonText}>Pacientes</Text>
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

export default Profiles;
