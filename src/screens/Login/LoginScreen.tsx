import React, {useCallback, useMemo, useState} from 'react';
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
import {useAppDispatch} from '@hooks/useAppDispatch';
import {login, User} from '@store/slices/userSlice';
import {doPost} from '@services/RequestService';
import ErrorComponent from '@components/Error/ErrorComponent';

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const LoginScreen = ({}: LoginScreenProps) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const doLogin = useCallback(() => {
    setLoading(true);
    doPost<User>({path: '/auth/sign-in', data: {email, password}})
      .then(response => {
        if (response.data.id) {
          const userData: User = {
            ...response.data,
            token: response.headers.authorization,
            refreshToken: response.headers['refresh-token'],
          };
          setLoading(false);
          dispatch(login(userData));
        }
      })
      .catch(e => {
        setError(
          e.response?.data?.errors?.message || 'Infelizmente, algo deu errado.',
        );
        setLoading(false);
      });
  }, [email, password, dispatch]);

  return (
    <ImgBackground source={require('@assets/images/login-bg.png')}>
      <AppNameComponent light />
      <FormContainer>
        <InputParentContainer>
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Input
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
          </InputContainer>
        </InputParentContainer>
        <InputParentContainer>
          <InputContainer>
            <InputLabel>Senha</InputLabel>
            <Input
              secureTextEntry
              onChangeText={setPassword}
              value={password}
            />
          </InputContainer>
          <ButtonComponent
            text="Entrar"
            onPress={doLogin}
            loading={loading}
            disabled={useMemo(
              () => !email || !password || loading,
              [email, password, loading],
            )}
          />
        </InputParentContainer>
        <ErrorComponent text={error} visible={!!error} />
      </FormContainer>
    </ImgBackground>
  );
};

export default LoginScreen;
