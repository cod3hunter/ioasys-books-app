import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import styled from '../../styled-components';

const ImgBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

const TextTest = styled.Text`
  font-family: ${({theme}) => theme.font};
  font-size: 50px;
`;

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <ImgBackground source={require('../../assets/images/login-bg.png')}>
      <TextTest>LoginScreen</TextTest>
    </ImgBackground>
  );
};

export default LoginScreen;
