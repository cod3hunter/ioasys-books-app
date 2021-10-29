import React, {useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
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

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const doLogin = useCallback(() => {
    navigation.navigate('Landing');
  }, [navigation]);

  return (
    <ImgBackground source={require('@assets/images/login-bg.png')}>
      <AppNameComponent light />
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
          <ButtonComponent text="Entrar" onPress={doLogin} />
        </InputParentContainer>
      </FormContainer>
    </ImgBackground>
  );
};

export default LoginScreen;
