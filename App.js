import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home'
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardTabNavigator from './screens/DashboardTabNavigator'; 
import AboutUsScreen from './screens/AboutUsScreen.js';
import LogoutScreen from './screens/Logout';
import { enableScreens } from 'react-native-screens';
enableScreens();

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer  options={{ headerShown: false }}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={RegistrationScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DashboardTabNavigator" component={DashboardTabNavigator}  options={{ headerShown: false }} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Logout" component={LogoutScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
