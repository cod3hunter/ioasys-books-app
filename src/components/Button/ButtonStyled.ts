import styled from '@styled';

type ContainerProps = {
  outline?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  border-radius: 44px;
  background-color: ${({outline}) => (outline ? 'transparent' : 'white')};
  padding: 8px 20px;
  width: auto;
  border-color: ${({outline, theme}) =>
    outline ? theme.colors.primary : 'white'};
  border-width: ${({outline}) => (outline ? '1px' : '0')};
  align-self: flex-start;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.font};
  font-weight: 500;
  font-size: ${({theme}) => `${theme.fontSizes[16]}px`};
`;
