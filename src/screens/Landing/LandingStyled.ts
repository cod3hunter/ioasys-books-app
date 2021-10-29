import styled from '@styled';
import {Platform} from 'react-native';

export const SafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.bgMid};
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 40px 16px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FilterContainer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 34px;
  align-items: center;
  justify-content: space-between;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  flex: 1;
  padding: ${Platform.OS === 'ios' ? '8px' : '0'};
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.textMid};
`;

export const FilterBtnContainer = styled.View`
  padding: 8px 0 8px 16px;
`;

export const SearchInput = styled.TextInput.attrs(({theme}) => ({
  placeholder: 'Procure um livro',
  selectionColor: theme.colors.textMid,
  autoCapitalize: 'none',
  autoCorrect: false,
}))`
  max-width: 85%;
  color: ${({theme}) => theme.colors.textDark};
`;
