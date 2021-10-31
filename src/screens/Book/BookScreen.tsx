import React, {useCallback, useEffect, useState} from 'react';
import IconButtonComponent from '@components/IconButton/IconButtonComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  SafeArea,
  Header,
  BookImage,
  Title,
  Container,
  DataContainer,
  Authors,
  InfoContainer,
  Text,
  Row,
  MidText,
  Label,
  ReviewContainer,
  MidReviewText,
} from './BookStyled';
import {doGet} from '@services/RequestService';
import ErrorComponent from '@components/Error/ErrorComponent';

export type BookScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Book'
>;

export default ({navigation, route}: BookScreenProps) => {
  const {id} = route.params;

  const [data, setData] = useState<Book>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    doGet<Book>({path: `/books/${id}`, needAuth: true})
      .then(resp => setData(resp.data))
      .catch(e => {
        setError(e);
      });
  }, [id]);

  return (
    <SafeArea>
      <Container>
        <Header>
          <IconButtonComponent
            border
            icon="arrow-left"
            onPress={useCallback(() => navigation.goBack(), [navigation])}
          />
        </Header>
        <ErrorComponent text={error} visible={!!error} />
        <DataContainer>
          <BookImage source={{uri: data?.imageUrl}} />
          <Title>{data?.title}</Title>
          <Authors>{data?.authors.join(', ')}</Authors>
          <InfoContainer>
            <Label>INFORMAÇÕES</Label>
            <Row>
              <Text>Páginas</Text>
              <MidText>{data?.pageCount} páginas</MidText>
            </Row>
            <Row>
              <Text>Editora</Text>
              <MidText>Editora {data?.publisher}</MidText>
            </Row>
            <Row>
              <Text>Publicação</Text>
              <MidText>{data?.published}</MidText>
            </Row>
            <Row>
              <Text>Idioma</Text>
              <MidText>{data?.language}</MidText>
            </Row>
            <Row>
              <Text>Título Original</Text>
              <MidText>{data?.title}</MidText>
            </Row>
            <Row>
              <Text>ISBN-10</Text>
              <MidText>{data?.isbn10}</MidText>
            </Row>
            <Row>
              <Text>ISBN-13</Text>
              <MidText>{data?.isbn13}</MidText>
            </Row>
            <Row>
              <Text>Categoria</Text>
              <MidText>{data?.category}</MidText>
            </Row>
          </InfoContainer>
          <ReviewContainer>
            <Label>RESENHA DA EDITORA</Label>
            <MidReviewText>
              {'\t'}
              {data?.description}
            </MidReviewText>
          </ReviewContainer>
        </DataContainer>
      </Container>
    </SafeArea>
  );
};
