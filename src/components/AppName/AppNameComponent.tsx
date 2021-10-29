import React from 'react';
import {Image} from 'react-native';
import {Container, Text} from './AppNameStyled';

export type AppNameComponentProps = {};

export default ({}: AppNameComponentProps) => {
  return (
    <Container>
      <Image source={require('@assets/images/logo.png')} />
      <Text>Books</Text>
    </Container>
  );
};
