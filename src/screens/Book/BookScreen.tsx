import React, {useCallback} from 'react';
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
  BigMidText,
  MidReviewText,
} from './BookStyled';

export type BookScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Book'
>;

export default ({navigation}: BookScreenProps) => {
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
        <DataContainer>
          <BookImage source={require('@assets/images/book.png')} />
          <Title>Change By Design Secon line exame testing</Title>
          <Authors>Daniel Mattos, José Leite, Terezo Santos</Authors>
          <InfoContainer>
            <Label>INFORMAÇÕES</Label>
            <Row>
              <Text>Páginas</Text>
              <MidText>304 páginas</MidText>
            </Row>
            <Row>
              <Text>Editora</Text>
              <MidText>Editora Loyola</MidText>
            </Row>
            <Row>
              <Text>Publicação</Text>
              <MidText>2020</MidText>
            </Row>
            <Row>
              <Text>Idioma</Text>
              <MidText>Inglês</MidText>
            </Row>
            <Row>
              <Text>Título Original</Text>
              <MidText>Change By Design</MidText>
            </Row>
            <Row>
              <Text>ISBN-10</Text>
              <MidText>006285666</MidText>
            </Row>
            <Row>
              <Text>ISBN-13</Text>
              <MidText>978-00628566</MidText>
            </Row>
            <Row>
              <Text>Categoria</Text>
              <MidText>Design Thinking</MidText>
            </Row>
          </InfoContainer>
          <ReviewContainer>
            <Label>RESENHA DA EDITORA</Label>
            <MidReviewText>
              {'\t'}Resenha da editora The subject of “design thinking” is the
              rage at business schools, throughout corporations, and
              increasingly in the popular press—due in large part to the work of
              IDEO, a leading design firm, and its celebrated CEO, Tim Brown,
              who uses this book to show how the techniques and strategies of
              design belong at every level of business.
            </MidReviewText>
          </ReviewContainer>
        </DataContainer>
      </Container>
    </SafeArea>
  );
};
