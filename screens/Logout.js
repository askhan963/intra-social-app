import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
const LogoutScreen = ({ navigation }) => {
    

    // Redirect to the Home Screen
    React.useEffect(() => {
        navigation.navigate('Home'); 
    }, []);

    return (
        <View style={styles.container}>
            <Text>Logging out...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LogoutScreen;
