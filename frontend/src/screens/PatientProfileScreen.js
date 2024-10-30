import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const PatientProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/child-pic.png')} style={styles.profileImage} />
            <Text style={styles.title}>Perfil del Paciente</Text>

            <View style={styles.infoContainer}>
                <FontAwesome name="child" size={24} color="#FF8A80" />
                <Text style={styles.label}>Nombre: María Pérez</Text>
            </View>

            <View style={styles.infoContainer}>
                <FontAwesome name="birthday-cake" size={24} color="#FF8A80" />
                <Text style={styles.label}>Edad: 7 años</Text>
            </View>

            <View style={styles.infoContainer}>
                <FontAwesome name="heartbeat" size={24} color="#FF8A80" />
                <Text style={styles.label}>Condición: Asma</Text>
            </View>

            <Text style={styles.sectionTitle}>Información del Responsable</Text>

            <View style={styles.infoContainer}>
                <FontAwesome name="user" size={24} color="#FF8A80" />
                <Text style={styles.label}>Nombre: José Pérez</Text>
            </View>

            <View style={styles.infoContainer}>
                <FontAwesome name="phone" size={24} color="#FF8A80" />
                <Text style={styles.label}>Teléfono: +503 7213 7890</Text>
            </View>

            <View style={styles.infoContainer}>
                <FontAwesome name="users" size={24} color="#FF8A80" />
                <Text style={styles.label}>Relación: Padre</Text>
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
        backgroundColor: '#FFF3E0',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#FF8A80',
    },
    title: {
        fontSize: 28,
        color: '#FF8A80',
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
    sectionTitle: {
        fontSize: 22,
        color: '#FF8A80',
        marginTop: 20,
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PatientProfileScreen;
