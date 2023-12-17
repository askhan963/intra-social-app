import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  useEffect(() => {
   
    const timeoutId = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logging out...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    
    alignItems: 'center',
  },
  text:{
    color: 'green',
  }
});

export default LogoutScreen;
