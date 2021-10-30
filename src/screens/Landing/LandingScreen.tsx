import React, {useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Container,
  Header,
  SafeArea,
  FilterContainer,
  SearchContainer,
  SearchInput,
  FilterBtnContainer,
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

export default ({}: LandingScreenProps) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const onModalClose = useCallback(() => setFilterModalVisible(false), []);
  const onFilterPress = useCallback((filters: Filters) => {
    console.log(filters);
  }, []);

  return (
    <SafeArea>
      <>
        <Container>
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
                onPress={useCallback(() => setFilterModalVisible(true), [])}
                size={18}
              />
            </FilterBtnContainer>
          </FilterContainer>
          <CardComponent />
          <CardComponent />
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
