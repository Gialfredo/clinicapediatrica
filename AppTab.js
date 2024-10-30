import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from './frontend/src/screens/HomeScreenMenu';
import ProfileScreen from './frontend/src/screens/PatientProfileScreen'
import UserInterfaceScreen from "./frontend/src/screens/UserInterfacesAvanzado";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen name = "Home" component={HomeScreen}/>
            <Tab.Screen name = "Profile" component={ProfileScreen}/>
            <Tab.Screen name = "UserInterface" component={UserInterfaceScreen}/>
        </Tab.Navigator>
    );
};

export default AppTabs;