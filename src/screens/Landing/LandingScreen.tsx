import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
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
import {logout} from '@store/slices/userSlice';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useBooks} from '@hooks/useBooks';
import ErrorComponent from '@components/Error/ErrorComponent';
import {useBookFilter} from '@hooks/useBookFilter';

export type LandingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Landing'
>;

export default ({navigation}: LandingScreenProps) => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filters, setFilters] = useState<Filters>({category: [], year: []});
  const [searchText, setSearchText] = useState('');

  const {data, error, hasMore} = useBooks({page: currentPage});
  const dataFiltered = useBookFilter({data, filters, textFilter: searchText});

  const onLogout = useCallback(() => dispatch(logout()), [dispatch]);
  const handleLoadMore = useCallback(() => {
    if (hasMore) {
      setCurrentPage(old => old + 1);
    }
  }, [hasMore]);

  const handleSearchText = useCallback(() => {
    if (searchText) {
      setSearchText('');
    }
  }, [searchText]);

  const searchInputIcon = useMemo(
    () => (searchText ? 'x' : 'search'),
    [searchText],
  );

  const renderItem = useCallback(
    ({item}) => (
      <CardComponent
        data={item}
        onPress={() => navigation.navigate('Book', {id: item.id})}
      />
    ),
    [navigation],
  );

  const listHeader = useMemo(
    () => (
      <>
        <Header>
          <AppNameComponent />
          <IconButtonComponent border icon="log-out" onPress={onLogout} />
        </Header>
        <FilterContainer>
          <SearchContainer>
            <SearchInput onChangeText={setSearchText} value={searchText} />
            <IconButtonComponent
              icon={searchInputIcon}
              onPress={handleSearchText}
              size={16}
            />
          </SearchContainer>
          <FilterBtnContainer>
            <IconButtonComponent
              icon="filter"
              onPress={() => setFilterModalVisible(true)}
              size={18}
            />
          </FilterBtnContainer>
        </FilterContainer>
        <ErrorComponent visible={!!error} text={error} />
      </>
    ),
    [error, handleSearchText, onLogout, searchInputIcon, searchText],
  );

  return (
    <SafeArea>
      <>
        <BookList
          ListHeaderComponent={listHeader}
          data={dataFiltered}
          keyExtractor={useCallback((_, i) => i, [])}
          renderItem={renderItem}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
        <FilterModalComponent
          visible={filterModalVisible}
          onClose={useCallback(() => setFilterModalVisible(false), [])}
          onFilterPress={setFilters}
        />
      </>
    </SafeArea>
  );
};
