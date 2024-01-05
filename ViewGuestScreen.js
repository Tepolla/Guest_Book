import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ViewGuestScreen = ({ navigation }) => {
  // State to store the list of guests
  const [guests, setGuests] = useState([]);

  // Load guest data from AsyncStorage when the component mounts
  useEffect(() => {
    loadGuestData();
  }, []);

  // Function to load guest data from AsyncStorage
  const loadGuestData = async () => {
    try {
      const storedGuests = await AsyncStorage.getItem('guests');
      if (storedGuests) {
        setGuests(JSON.parse(storedGuests));
      }
    } catch (error) {
      console.error('Error loading guest data:', error);
    }
  };

  // Function to delete a guest
  const deleteGuest = async (index) => {
    const updatedGuests = [...guests];
    updatedGuests.splice(index, 1);
    await AsyncStorage.setItem('guests', JSON.stringify(updatedGuests));
    setGuests(updatedGuests);
  };

  // Function to handle long press on a guest item (for deletion)
  const handleLongPress = (index) => {
    Alert.alert(
      'Delete Guest',
      'Are you sure you want to delete this guest?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteGuest(index) },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleUnderline}>Guest List</Text>
      </View>

      {/* Guest List */}
      <View style={styles.guestListContainer}>
        {guests.map((guest, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.guestListItem,
              { backgroundColor: pressed ? '#EFEFEF' : 'transparent' },
            ]}
            onLongPress={() => handleLongPress(index)}
          >
            <Text style={styles.guestText}>
              {`${index + 1}. ${guest.name}, ${guest.age} years old`}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    marginTop: 20,
  },
  titleUnderline: {
    fontSize: 30,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  guestListContainer: {
    flex: 18,
    marginTop: 10,
  },
  guestListItem: {
    fontSize: 16,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  guestText: {
    fontSize: 16,
  },
  backButton: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    width: 175,
    height: 50,
  },
  backButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ViewGuestScreen;
