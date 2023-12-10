import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Open the database
        const db = SQLite.openDatabase(
            {
                name: 'MainDB',
                location: 'default',
            },
            () => {},
            error => { console.log(error) }
        );

        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM Users WHERE Email = ? AND Password = ?",
                [email, password],
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        Alert.alert("Success", "Login Successful");
                        setEmail('')
                        setPassword('')
                        navigation.navigate('DashboardTabNavigator');
                    } else {
                        Alert.alert("Error", "Invalid Email or Password");
                    }
                },
                error => { console.log(error) }
            );
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://png.pngtree.com/templates/20180813/community-organization-logo-design-template-png_28632.jpg' }}
                style={styles.logo}
            />
            <Text style={styles.description}>
                Login to Your Account
            </Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={() => navigation.navigate('Register')} 
            >
                <Text style={styles.desc}>
                Haven't registered yet?
            </Text>
                <Text style={styles.linkText}> Click here to register.</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        padding: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        fontSize: 16,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 30,
        color: '#000000',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#128C7E',
        padding: 15,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },    
    desc: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        color: '#000000',
        fontWeight: "bold"
    },
    linkText: {
        marginTop: 10,
        color: '#128C7E',
        textDecorationLine: 'underline',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
       
    },
});

export default LoginScreen;
