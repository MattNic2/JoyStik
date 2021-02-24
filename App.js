import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! Welcome to Joystik</Text>
      <Text>Please set up your profile!</Text>
      <Text>First Name: </Text>
      <Text>Last Name: </Text>
      <Text>Date of Birth: </Text>
      <Text>Gender: </Text>
      <Text>Street Address: </Text>
      <Text>City:</Text>
      <Text>Zip code:</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
