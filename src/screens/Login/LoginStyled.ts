import styled from '@styled';

export const ImgBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 16px;
`;

export const FormContainer = styled.View`
  margin-top: 32px;
`;

export const InputContainer = styled.View`
  max-width: 70%;
`;

export const InputParentContainer = styled.View`
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  width: 100%;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: 16px;
  border-radius: 4px;
`;

export const InputLabel = styled.Text`
  color: ${({theme}) => theme.colors.textMid};
  font-family: ${({theme}) => theme.font};
`;

export const Input = styled.TextInput.attrs(() => ({
  selectionColor: 'white',
  autoCapitalize: 'none',
  autoCorrect: false,
}))`
  color: ${({theme}) => theme.colors.textLight};
  margin-top: 4px;
`;
