import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import RNPickerSelect from 'react-native-picker-select';

const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const RegistrationScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Open database or create if it doesn't exist
    const db = SQLite.openDatabase(
        {
            name: 'MainDB',
            location: 'default',
        },
        () => { },
        error => { console.log(error) }
    );

    // Function to handle registration
    const handleRegistration = () => {
        // Create a users table if it doesn't exist
        if (!name || !age || !gender || !phone || !email || !password) {
            Alert.alert("Error", "Please fill the form correctly...");
        }
        else {
            db.transaction((tx) => {
                tx.executeSql(
                    "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER, Gender TEXT, Phone TEXT, Email TEXT, Password TEXT)",
                    [],
                    () => { console.log("Table created successfully") },
                    error => { console.log(error) }
                );
            });

            // Insert user data into the table
            db.transaction((tx) => {
                tx.executeSql(
                    "INSERT INTO Users (Name, Age, Gender, Phone, Email, Password) VALUES (?,?,?,?,?,?)",
                    [name, age, gender, phone, email, password],
                    () => {
                        Alert.alert("Success", "You are registered successfully");
                        navigation.goBack();
                    },
                    error => { console.log(error) }
                );
            });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.description}>
                Register Here
            </Text>
            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Age"
                style={styles.input}
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />
         
            <RNPickerSelect
                placeholder={{
                    label: 'Select Gender',
                    value: null,
                }}
                items={genders}
                onValueChange={(value) => setGender(value)}
                style={{
                    ...pickerSelectStyles,
                    inputAndroid: styles.input,
                    inputIOS: styles.input,
                }}
                value={gender}
            />
            <TextInput
                placeholder="Phone"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
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
                onPress={handleRegistration}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            {/* Link to Login Screen */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Login')} // Navigate to your login screen
            >
                <Text style={styles.desc}>
                Already have an account? 
                </Text>
                <Text style={styles.linkText}>Click here to login.</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    description: {
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        color: '#000000',
        fontWeight: "bold"
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginVertical: 10,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        marginVertical: 10,
    },
});

export default RegistrationScreen;
