import React from 'react';
import {scale} from 'react-native-size-matters';
import {defaultTheme} from '@theme';
import {Container, Icon} from './IconButtonStyled';

export type IconButtonComponentProps = {
  icon: string;
  onPress: () => void;
  border?: boolean;
  size?: number;
  bgColor?: string;
};

export default ({
  icon,
  onPress,
  border = false,
  size = 18,
  bgColor = 'transparent',
}: IconButtonComponentProps) => {
  return (
    <Container {...{onPress, border, bgColor}}>
      <Icon
        name={icon}
        size={scale(size)}
        color={defaultTheme.colors.textDark}
      />
    </Container>
  );
};
