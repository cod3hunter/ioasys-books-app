import React, {useMemo} from 'react';
import {Image} from 'react-native';
import {Container, Text} from './AppNameStyled';

export type AppNameComponentProps = {
  light?: boolean;
};

export default ({light}: AppNameComponentProps) => {
  return (
    <Container>
      <Image
        source={useMemo(
          () =>
            light
              ? require('@assets/images/logo-light.png')
              : require('@assets/images/logo-dark.png'),
          [light],
        )}
      />
      <Text {...{light}}>Books</Text>
    </Container>
  );
};
