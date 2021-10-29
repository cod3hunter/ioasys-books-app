import React from 'react';
import {
  Container,
  TitleContainer,
  Title,
  Subtitle,
  InfoContainer,
  DetailsContainer,
  Text,
  BookImage,
} from './CardStyled';

export type CardComponentProps = {};

export default ({}: CardComponentProps) => {
  return (
    <Container>
      <BookImage source={require('@assets/images/book.png')} />
      <InfoContainer>
        <TitleContainer>
          <Title>Crossing the Chasm</Title>
          <Subtitle>Geoffrey A. Moore</Subtitle>
        </TitleContainer>
        <DetailsContainer>
          <Text>150 páginas</Text>
          <Text>Editora Loyola</Text>
          <Text>Publicado em 2021</Text>
        </DetailsContainer>
      </InfoContainer>
    </Container>
  );
};
