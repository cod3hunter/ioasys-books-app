import styled from '@styled';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type TextProps = {
  light?: boolean;
};

export const Text = styled.Text<TextProps>`
  color: ${({light, theme}) => (light ? 'white' : theme.colors.textDark)};
  margin-left: 16px;
  font-size: ${({theme}) => `${theme.fontSizes[28]}px`};
`;
