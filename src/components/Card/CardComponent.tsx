import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
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

const CardComponent = ({onPress, data}: CardComponentProps) => {
  return (
    <Container onPress={useCallback(() => onPress(data.id), [data, onPress])}>
      <BookImage
        source={{uri: data.imageUrl, priority: FastImage.priority.low}}
        resizeMode={FastImage.resizeMode.contain}
      />
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

export default React.memo(CardComponent);
