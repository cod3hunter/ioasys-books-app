import styled from '@styled';

export const Container = styled.Modal`
  flex: 1;
`;

export const Background = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 16px;
  justify-content: center;
`;

export const ContentContainer = styled.View`
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  background-color: white;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MultiselectContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  padding-bottom: 8px;
`;

export const LabelFilter = styled.Text`
  font-family: ${({theme}) => theme.font};
  font-weight: bold;
  font-size: ${({theme}) => `${theme.fontSizes[12]}px`};
  color: ${({theme}) => theme.colors.textDark};
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

type TagProps = {
  selected?: boolean;
};

export const Tag = styled.TouchableOpacity<TagProps>`
  border-color: ${({theme}) => theme.colors.textDark};
  padding: 8px 16px;
  border-radius: 44px;
  border-width: ${({selected}) => (selected ? '0px' : '0.3px')};
  margin: 8px 4px 0 4px;
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.secondary : 'transparent'};
`;

export const TagText = styled.Text<TagProps>`
  font-family: ${({theme}) => theme.font};
  font-size: ${({theme}) => `${theme.fontSizes[12]}px`};
  color: ${({theme, selected}) => (selected ? 'white' : theme.colors.textDark)};
`;

export const Footer = styled.View`
  margin-top: 8px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;

export const ScrollView = styled.ScrollView``;
