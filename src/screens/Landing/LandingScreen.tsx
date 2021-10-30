import React, {useCallback, useMemo, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Container,
  Header,
  SafeArea,
  FilterContainer,
  SearchContainer,
  SearchInput,
  FilterBtnContainer,
  BookList,
} from './LandingStyled';
import AppNameComponent from '@components/AppName/AppNameComponent';
import IconButtonComponent from '@components/IconButton/IconButtonComponent';
import CardComponent from '@components/Card/CardComponent';
import FilterModalComponent, {
  Filters,
} from '@components/FilterModal/FilterModalComponent';

export type LandingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Landing'
>;

const books: Book[] = [
  {
    id: '123id',
    title: 'Titulo',
    description: 'descrição',
    authors: ['Daniel Mattos'],
    pageCount: '200',
    category: 'categoria',
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    isbn10: '006285',
    isbn13: '9780-00231',
    language: 'Inglês',
    publisher: 'Intrínseca',
    published: '2010',
  },
  {
    id: '124id',
    title: 'Titulo',
    description: 'descrição',
    authors: ['Daniel Mattos'],
    pageCount: '200',
    category: 'categoria',
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    isbn10: '006285',
    isbn13: '9780-00231',
    language: 'Inglês',
    publisher: 'Intrínseca',
    published: '2010',
  },
  {
    id: '125id',
    title: 'Titulo',
    description: 'descrição',
    authors: ['Daniel Mattos'],
    pageCount: '200',
    category: 'categoria',
    imageUrl: 'https://files-books.ioasys.com.br/Book-0.jpg',
    isbn10: '006285',
    isbn13: '9780-00231',
    language: 'Inglês',
    publisher: 'Intrínseca',
    published: '2010',
  },
];

export default ({navigation}: LandingScreenProps) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const onModalClose = useCallback(() => setFilterModalVisible(false), []);
  const onFilterPress = useCallback((filters: Filters) => {
    console.log(filters);
  }, []);
  const onIconFilterPress = useCallback(() => setFilterModalVisible(true), []);

  const ListHeaderComponent = useMemo(
    () => (
      <>
        <Header>
          <AppNameComponent />
          <IconButtonComponent border icon="log-out" onPress={() => {}} />
        </Header>
        <FilterContainer>
          <SearchContainer>
            <SearchInput />
            <IconButtonComponent icon="search" onPress={() => {}} size={16} />
          </SearchContainer>
          <FilterBtnContainer>
            <IconButtonComponent
              icon="filter"
              onPress={onIconFilterPress}
              size={18}
            />
          </FilterBtnContainer>
        </FilterContainer>
      </>
    ),
    [onIconFilterPress],
  );

  return (
    <SafeArea>
      <>
        <Container>
          <BookList
            ListHeaderComponent={ListHeaderComponent}
            data={books}
            renderItem={({item}) => (
              <CardComponent
                data={item}
                onPress={() => navigation.navigate('Book', {id: item.id})}
              />
            )}
          />
        </Container>
        <FilterModalComponent
          visible={filterModalVisible}
          onClose={onModalClose}
          onFilterPress={onFilterPress}
        />
      </>
    </SafeArea>
  );
};
