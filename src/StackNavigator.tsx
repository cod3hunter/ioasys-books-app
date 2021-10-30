import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/LoginScreen';
import LandingScreen from '@screens/Landing/LandingScreen';
import BookScreen from '@screens/Book/BookScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
