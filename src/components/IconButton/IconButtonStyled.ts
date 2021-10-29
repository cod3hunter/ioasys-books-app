import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from '@styled';

type ContainerProps = {
  border?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 8px;
  border-width: 1px;
  background-color: ${({theme}) => theme.colors.bgMid};
  border-width: ${({border}) => (border ? '1px' : '0')};
  border-color: ${({theme}) => theme.colors.textMid};
  border-radius: 32px;
  align-self: flex-start;
`;

export const Icon = styled(FeatherIcon)``;
