import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/LoginScreen';
import LandingScreen from '@screens/Landing/LandingScreen';
import BookScreen from '@screens/Book/BookScreen';
import {useSelector} from 'react-redux';
import {isLoggedSelector} from '@store/slices/userSlice';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const userIsLogged = useSelector(isLoggedSelector);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userIsLogged ? (
        <>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
