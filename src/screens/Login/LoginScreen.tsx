import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  ImgBackground,
  InputContainer,
  InputLabel,
  Input,
  FormContainer,
  InputParentContainer,
} from './LoginStyled';
import AppNameComponent from '@components/AppName/AppNameComponent';
import ButtonComponent from '@components/Button/ButtonComponent';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <ImgBackground source={require('../../assets/images/login-bg.png')}>
      <AppNameComponent />
      <FormContainer>
        <InputParentContainer>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input keyboardType="email-address" />
          </InputContainer>
        </InputParentContainer>
        <InputParentContainer>
          <InputContainer>
            <InputLabel>Senha</InputLabel>
            <Input secureTextEntry />
          </InputContainer>
          <ButtonComponent text="Entrar" onPress={() => {}} />
        </InputParentContainer>
      </FormContainer>
    </ImgBackground>
  );
};

export default LoginScreen;
