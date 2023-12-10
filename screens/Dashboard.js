import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const DashboardScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
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
                "SELECT * FROM Users",
                [],
                (tx, results) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setUsers(temp);
                },
                error => { console.log(error) }
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Our Dashboard
            </Text>
            
            <Text>Here are the all people...</Text>
            <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.label}>Name:  <Text style={styles.text}>{item.Name}</Text></Text>
                        <Text style={styles.label}>Email:  <Text style={styles.text}>{item.Email}</Text></Text>
                        <Text style={styles.label}>Age:   <Text style={styles.text}>{item.Age}</Text></Text>
                    </View>
                )}
            />
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#F0F0F0',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
        color: '#333',
        fontWeight: "bold"
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#555',
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
});

export default DashboardScreen;
