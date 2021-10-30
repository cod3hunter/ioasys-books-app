import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from '@styled';

type ContainerProps = {
  border: boolean;
  bgColor: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 8px;
  border-width: 1px;
  background-color: ${({bgColor}) => bgColor};
  border-width: ${({border}) => (border ? '1px' : '0')};
  border-color: ${({theme}) => theme.colors.textMid};
  border-radius: 32px;
  align-self: center;
`;

export const Icon = styled(FeatherIcon)``;
