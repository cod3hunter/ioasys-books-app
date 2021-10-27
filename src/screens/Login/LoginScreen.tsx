import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
