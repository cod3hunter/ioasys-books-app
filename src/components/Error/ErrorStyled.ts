import styled from '@styled';

export const Container = styled.View`
  align-self: center;
  flex-direction: row;
  border-radius: 4px;
  padding: 8px 16px;
  margin-top: 8px;
  background-color: ${({theme}) => theme.colors.error};
`;

export const Text = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.font};
  font-size: ${({theme}) => `${theme.fontSizes[14]}px`};
  font-weight: bold;
`;
