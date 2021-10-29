import styled from '@styled';

export const Container = styled.TouchableOpacity`
  background-color: white;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  flex-direction: row;
  margin-top: 16px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  elevation: 10;
`;

export const BookImage = styled.Image`
  height: 122px;
  width: 80px;
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
  size: ${({theme}) => theme.fontSizes[12]};
`;

export const Title = styled(Text)`
  font-weight: bold;
  size: ${({theme}) => theme.fontSizes[14]};
  color: ${({theme}) => theme.colors.textDark};
`;

export const Subtitle = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
`;
