import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DashboardScreen from './Dashboard';
import AboutUsScreen from './AboutUsScreen';
import LogoutScreen from './Logout';

const Tab = createBottomTabNavigator();

const DashboardTabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            activeTintColor: 'green',
          }}  
        >
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}


            />
            <Tab.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default DashboardTabNavigator;
