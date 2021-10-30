import React, {useCallback} from 'react';
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

export type CardComponentProps = {
  onPress: (id: string) => void;
  data: Book;
};

export default ({onPress, data}: CardComponentProps) => {
  return (
    <Container onPress={useCallback(() => onPress(data.id), [data, onPress])}>
      <BookImage source={require('@assets/images/book.png')} />
      <InfoContainer>
        <TitleContainer>
          <Title>{data.title}</Title>
          <Subtitle>{data.authors[0]}</Subtitle>
        </TitleContainer>
        <DetailsContainer>
          <Text>{data.pageCount} páginas</Text>
          <Text>Editora {data.publisher}</Text>
          <Text>Publicado em {data.published}</Text>
        </DetailsContainer>
      </InfoContainer>
    </Container>
  );
};
