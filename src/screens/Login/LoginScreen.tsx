import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import styled from '../../styled-components';

const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
`;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View>
      <Title>LoginScreen</Title>
    </View>
  );
};

export default LoginScreen;
