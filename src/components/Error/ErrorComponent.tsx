import React from 'react';
import {Container, Text} from './ErrorStyled';

type ErrorComponentProps = {
  text: string;
  visible: boolean;
};

export default ({text, visible}: ErrorComponentProps) => {
  if (visible) {
    return (
      <Container>
        <Text>{text}</Text>
      </Container>
    );
  }
  return <></>;
};
