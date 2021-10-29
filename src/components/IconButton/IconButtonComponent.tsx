import React from 'react';
import {scale} from 'react-native-size-matters';
import {defaultTheme} from '@theme';
import {Container, Icon} from './IconButtonStyled';

export type IconButtonComponentProps = {
  icon: string;
  onPress: () => void;
  border?: boolean;
  size?: number;
};

export default ({
  icon,
  onPress,
  border,
  size = 18,
}: IconButtonComponentProps) => {
  return (
    <Container {...{onPress, border}}>
      <Icon
        name={icon}
        size={scale(size)}
        color={defaultTheme.colors.textDark}
      />
    </Container>
  );
};
