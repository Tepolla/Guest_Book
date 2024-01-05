import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddGuestScreen = ({ navigation }) => {
  const [nameEnter, setNameEnter] = useState('');
  const [ageEnter, setAgeEnter] = useState('');
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // Load guest data from AsyncStorage when the component mounts
    loadGuestData();
  }, []);

  const storeGuestData = async () => {
    if (nameEnter.trim() === '' || ageEnter.trim() === '') {
      alert('Please enter both name and age.');
      return;
    }

    const newGuest = {
      name: nameEnter,
      age: ageEnter,
    };

    // Save the new guest to AsyncStorage
    await AsyncStorage.setItem('guests', JSON.stringify([...guests, newGuest]));

    // Update the guest list state
    setGuests((prevGuests) => [...prevGuests, newGuest]);

    // Clear input fields
    setNameEnter('');
    setAgeEnter('');
  };

  const loadGuestData = async () => {
    try {
      // Load guest data from AsyncStorage
      const storedGuests = await AsyncStorage.getItem('guests');
      if (storedGuests) {
        setGuests(JSON.parse(storedGuests));
      }
    } catch (error) {
      console.error('Error loading guest data:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add guest here!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Please enter your name here."
          value={nameEnter}
          onChangeText={setNameEnter}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Please enter your age here."
          value={ageEnter}
          onChangeText={setAgeEnter}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={storeGuestData}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

  const styles = StyleSheet.create({
    container: {
      paddingTop: StatusBar.currentHeight,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

/* -------------------------- CONTAINERS -------------------------- */

    // Container for title
    titleContainer: {
      width: '100%',
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    // Container for input textbox
    inputContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Container for Button
    buttonContainer: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 10,
    },

    /* -------------------------- ITEMS IN CONTAINERS -------------------------- */

    // Title text properties
    title: {
      color: 'black',
      fontSize: 40,
    },
    //input textbox properties
    inputStyle: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10, // Makes text input round
      paddingLeft: 10,
      marginBottom: 20,
    },
    // Button properties
    button: {
      borderRadius: 50, // Makes button rounded
      width: 175, // Set the width
      height: 50, // Set the height
      backgroundColor: '#ADD8E6',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal:10,
    },
    // Button text properties
    buttonText: {
      fontSize: 25,
    },
  });

export default AddGuestScreen;