import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';

const AddGuestScreen = ({ navigation }) => {
  return (
    
    // SafeareaView made to encapsulate the entirity of the UI for the AddGuestScreen
    <SafeAreaView style={styles.container}>

        {/* ----------------------------- TITLE ----------------------------- */}

        {/* For page title */}
        <View style={styles.titleContainer}>

            <Text style={styles.title}>Add guest here!</Text>

        </View>
        
        {/* ----------------------------- TEXT INPUT ----------------------------- */}
        
        {/* For Text input in page */}
        <View style={styles.inputContainer}>

            <TextInput
                style={styles.inputStyle}
                placeholder="Please enter your name here."
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Please enter your age here."
            />
            
        </View>

        {/* ----------------------------- BUTTONS ----------------------------- */}
        
        {/* For Back and Done Button in page */}
        <View style={styles.buttonContainer}>
        
            {/* Back Button */}
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        
          {/* Done Button */}
          <TouchableOpacity
          style={styles.button}
          //onPress={() => // PROGRAM BUTTON TO SEND TEXT DATA TO SQL DATABASE THEN NAVIGATES TO THE HOME SCREEN
          
          // navigation.navigate('HomeScreen')}

          
          >
              <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>

        </View>
    
    </SafeAreaView>
  );
}
  
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