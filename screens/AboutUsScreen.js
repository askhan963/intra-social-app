import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: 'https://png.pngtree.com/templates/20180813/community-organization-logo-design-template-png_28632.jpg' }} 
                style={styles.image}
            />
            <Text style={styles.title}>About Our Organization</Text>
            <Text style={styles.content}>
                Our organization ABC was founded in 2020. We specialize in Web. Our mission is to Make the world Awesome. We are committed to delivering high-quality services.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0', 
    },
    image: {
        width: 150, 
        height: 150, 
        marginBottom: 20,
        resizeMode: 'contain', 
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    content: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666', 
    },
});

export default AboutUsScreen;
