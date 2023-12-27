import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddGuestScreen from './AddGuestScreen';
import ViewGuestScreen from './ViewGuestScreen';

const Stack = createStackNavigator();

const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShown: false, // hides header
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddGuestScreen" component={AddGuestScreen} />
        <Stack.Screen name="ViewGuestScreen" component={ViewGuestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyComponent;
