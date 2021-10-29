import styled from '@styled';

export const Container = styled.View`
  flex-direction: row;
`;
export const Text = styled.Text`
  color: white;
  margin-left: 16px;
  margin-top: -1px;
  font-size: ${({theme}) => `${theme.fontSizes[28]}px`};
`;
