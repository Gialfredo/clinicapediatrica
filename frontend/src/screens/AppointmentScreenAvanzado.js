import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';



const AppointmentScreen = ({navigation}) => {
    const [appointments, setAppointments] = useState([
        { id: '1', date: '2024-08-01', time: '10:00 AM', patient: 'Juan Pérez', reason: 'Revisión general' },
        { id: '2', date: '2024-08-03', time: '11:00 AM', patient: 'Ana García', reason: 'Consulta de seguimiento' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newAppointment, setNewAppointment] = useState({ date: '', time: '', patient: '', reason: '' });

    const handleAddAppointment = () => {
        setAppointments([...appointments, { id: (appointments.length + 1).toString(), ...newAppointment }]);
        setNewAppointment({ date: '', time: '', patient: '', reason: '' });
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Citas Programadas</Text>
            <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.appointmentContainer}>
                        <Text style={styles.appointmentText}>Fecha: {item.date}</Text>
                        <Text style={styles.appointmentText}>Hora: {item.time}</Text>
                        <Text style={styles.appointmentText}>Paciente: {item.patient}</Text>
                        <Text style={styles.appointmentText}>Motivo: {item.reason}</Text>
                    </View>
                )}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>Nueva Cita</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Agregar Nueva Cita</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Fecha (YYYY-MM-DD)"
                            value={newAppointment.date}
                            onChangeText={(text) => setNewAppointment({ ...newAppointment, date: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Hora (HH:MM AM/PM)"
                            value={newAppointment.time}
                            onChangeText={(text) => setNewAppointment({ ...newAppointment, time: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Paciente"
                            value={newAppointment.patient}
                            onChangeText={(text) => setNewAppointment({ ...newAppointment, patient: text })}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Motivo"
                            value={newAppointment.reason}
                            onChangeText={(text) => setNewAppointment({ ...newAppointment, reason: text })}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.modalButton} onPress={handleAddAppointment}>
                                <Text style={styles.modalButtonText}>Agregar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    appointmentContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    appointmentText: {
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalButton: {
        backgroundColor: '#6200ee',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '45%',
        alignItems: 'center',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default AppointmentScreen;

