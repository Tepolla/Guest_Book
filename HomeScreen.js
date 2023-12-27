// This page file is for the main page that users will see, the HomeScreen.

import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Guest Book</Text>
      </View>

      <View style={styles.buttonContainer}>

      {/* Add Guest properties */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddGuestScreen')}
        >
        <Text style={styles.buttonText}>Add Guests</Text>
        </TouchableOpacity>
        
        {/* View Guest properties */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ViewGuestScreen')}
        >
          <Text style={styles.buttonText}>View Guests</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    // Container properties
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: StatusBar.currentHeight,
      backgroundColor:'grey',
    },
    // Container for title
    titleContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    // Container for Button
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Button properties
    button: {
      borderRadius: 50, // Makes button rounded
      width: 200, // Set the width
      height: 50, // Set the height
      backgroundColor: '#ADD8E6',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 30,
    },
    // Button text properties
    buttonText: {
      fontSize: 25,
    },
    // Title text properties
    title: {
    color: '#ADD8E6',
      fontSize: 40,
      textAlign: 'center',
    },
  });

export default HomeScreen;