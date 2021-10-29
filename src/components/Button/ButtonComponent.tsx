import React from 'react';
import {ViewProps} from 'react-native';
import {Container, Text} from './ButtonStyled';

export type ButtonComponentProps = {
  text: string;
  outline?: boolean;
  onPress: () => void;
  style?: ViewProps;
};

export default ({text, onPress, outline, style}: ButtonComponentProps) => {
  return (
    <Container {...{onPress, outline, style}}>
      <Text>{text}</Text>
    </Container>
  );
};
