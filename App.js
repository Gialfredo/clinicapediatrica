import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './frontend/src/screens/Login';
import HomeScreenMenu from './frontend/src/screens/HomeScreenMenu';
import Profiles from './frontend/src/screens/Profiles';
import AdminProfileScreen from './frontend/src/screens/AdminProfileScreen';
import ProfileScreen from './frontend/src/screens/ProfileScreen2';
import PatientProfileScreen from './frontend/src/screens/PatientProfileScreen';
import SettingScreen from './frontend/src/screens/Settings';
import AppointmentScreen from './frontend/src/screens/AppointmentScreenAvanzado';
import MedicalHistoryScreen from './frontend/src/screens/MedicalHistoryScreenAvanzado';
import UserInterfacesScreen from './frontend/src/screens/InterfazUsuario';
import PatientList from './frontend/src/screens/PatientList';

const Stack = createStackNavigator();

const App = () => {
  return (


    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Inicio' component={HomeScreenMenu} />
        <Stack.Screen name='ProfileScreen' component={Profiles} />
        <Stack.Screen name='ProfileAdmin' component={AdminProfileScreen} />
        <Stack.Screen name='ProfileDoc' component={ProfileScreen} />
        <Stack.Screen name='ProfilePatient' component={PatientProfileScreen} />
        <Stack.Screen name='SettingsScreen' component={SettingScreen} />
        <Stack.Screen name='AppointmentScreen' component={AppointmentScreen} />
        <Stack.Screen name='MedicalHistoryScreen' component={MedicalHistoryScreen} />
        {/* UserInterfacesScreen */}
        <Stack.Screen name='UserInterfacesScreen' component={UserInterfacesScreen} />

        <Stack.Screen name='PatientList' component={PatientList} />
      </Stack.Navigator>

    </NavigationContainer>

  )
};



export default App;
