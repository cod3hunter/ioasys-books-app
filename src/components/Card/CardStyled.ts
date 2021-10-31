import styled from '@styled';
import FastImage from 'react-native-fast-image';
import {scale} from 'react-native-size-matters';

export const Container = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  flex-direction: row;
  margin-top: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  elevation: 10;
`;

export const BookImage = styled(FastImage)`
  height: ${scale(122)}px;
  width: ${scale(80)}px;
`;

export const InfoContainer = styled.View`
  margin-left: 16px;
  justify-content: space-between;
`;

export const TitleContainer = styled.View``;

export const DetailsContainer = styled.View``;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.font};
  color: ${({theme}) => theme.colors.textMid};
  font-size: ${({theme}) => `${theme.fontSizes[12]}px`};
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: ${({theme}) => `${theme.fontSizes[14]}px`};
  color: ${({theme}) => theme.colors.textDark};
`;

export const Subtitle = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;
