import {defaultTheme} from '@theme';
import React from 'react';
import {ViewProps, ActivityIndicator} from 'react-native';
import {Container, Text} from './ButtonStyled';

export type ButtonComponentProps = {
  text: string;
  outline?: boolean;
  onPress: () => void;
  style?: ViewProps;
  loading?: boolean;
  disabled?: boolean;
};

export default ({
  text,
  onPress,
  outline,
  style,
  disabled,
  loading,
}: ButtonComponentProps) => {
  return (
    <Container {...{onPress, outline, style, disabled}}>
      {loading ? (
        <ActivityIndicator color={defaultTheme.colors.primary} />
      ) : (
        <Text {...{disabled}}>{text}</Text>
      )}
    </Container>
  );
};
