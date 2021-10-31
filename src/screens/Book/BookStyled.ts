import styled from '@styled';
import {Platform} from 'react-native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 16,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
`;

export const DataContainer = styled.View`
  width: 100%;
  padding: 0px 24px;
`;

export const BookImage = styled.ImageBackground`
  width: 100%;
  aspect-ratio: 0.65;
  margin-top: 16px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.Text.attrs({numberOfLines: 2})`
  font-weight: ${Platform.OS === 'ios' ? '600' : 'bold'};
  font-family: ${({theme}) => theme.font};
  font-size: ${({theme}) => `${theme.fontSizes[32]}px`};
  flex-wrap: wrap;
  margin-top: 24px;
  color: ${({theme}) => theme.colors.textDark};
`;

export const Authors = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.font};
  margin-top: 4px;
  flex: 1;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.View`
  margin-top: 32px;
`;

export const Row = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 6px;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.textDark};
  font-weight: ${Platform.OS === 'ios' ? '600' : 'bold'};
  font-size: ${({theme}) => `${theme.fontSizes[12]}px`};
`;

export const Label = styled(Text)`
  padding-bottom: 16px;
`;

export const MidText = styled(Text)`
  color: ${({theme}) => theme.colors.textMid};
  text-align: right;
`;

export const MidReviewText = styled(MidText)`
  text-align: left;
  line-height: 18px;
  padding-top: 16px;
  flex-direction: row;
`;

export const ReviewContainer = styled.View`
  margin-top: 24px;
`;
