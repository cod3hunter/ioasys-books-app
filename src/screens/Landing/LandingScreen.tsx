import React from 'react';
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

export type LandingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Landing'
>;

export default ({}: LandingScreenProps) => {
  return (
    <SafeArea>
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
            <IconButtonComponent icon="filter" onPress={() => {}} size={18} />
          </FilterBtnContainer>
        </FilterContainer>
      </Container>
    </SafeArea>
  );
};
