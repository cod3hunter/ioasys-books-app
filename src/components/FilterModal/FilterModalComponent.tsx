import ButtonComponent from '@components/Button/ButtonComponent';
import IconButtonComponent from '@components/IconButton/IconButtonComponent';
import React, {useCallback, useState} from 'react';
import {
  Container,
  Background,
  ContentContainer,
  Header,
  Footer,
  MultiselectContainer,
  LabelFilter,
  TagsContainer,
  Tag,
  TagText,
} from './FilterModalStyled';

export type Filters = {
  category: string[] | number[];
  year: string[] | number[];
};

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onFilterPress: (filters: Filters) => void;
};

type TagItem = {
  id: string;
  label: string;
};

type FilterItem = {
  id: 'category' | 'year';
  title: string;
  tags: TagItem[];
};

const allFilters: FilterItem[] = [
  {
    id: 'category',
    title: 'Selecione a categoria',
    tags: [
      {id: 'design1', label: 'Design'},
      {id: 'design2', label: 'Design'},
      {id: 'design3', label: 'Design'},
      {id: 'design4', label: 'Design'},
      {id: 'design5', label: 'Design'},
    ],
  },
  {
    id: 'year',
    title: 'Selecione o ano',
    tags: [
      {id: '2015', label: '2015'},
      {id: '2016', label: '2016'},
      {id: '2017', label: '2017'},
      {id: '2018', label: '2018'},
      {id: '2019', label: '2019'},
      {id: '2020', label: '2020'},
      {id: '2021', label: '2021'},
    ],
  },
];

type FilterChangeProps = {
  filterId: 'category' | 'year';
  tagId: string;
  onFilterPress: (filters: Filters) => void;
};

export default ({visible, onClose, onFilterPress}: FilterModalProps) => {
  const [filters, setFilters] = useState<Filters>({
    category: [],
    year: [],
  });

  const onFilterChange = useCallback(
    ({filterId, tagId}: FilterChangeProps) =>
      () => {
        setFilters(old => {
          const filterTagsSelected = [...old[filterId]];
          const tagIndex = filterTagsSelected.indexOf(tagId);
          tagIndex >= 0
            ? filterTagsSelected.splice(tagIndex, 1)
            : filterTagsSelected.push(tagId);
          return {
            ...old,
            [filterId]: filterTagsSelected,
          };
        });
      },
    [],
  );

  const onFilter = useCallback(() => {
    onFilterPress(filters);
    onClose();
  }, [onFilterPress, filters, onClose]);

  return (
    <Container {...{visible}} onRequestClose={onClose}>
      <Background>
        <ContentContainer>
          <Header>
            <IconButtonComponent onPress={onClose} border icon="x" />
          </Header>
          {allFilters.map((filterItem, i) => (
            <MultiselectContainer key={i}>
              <LabelFilter>{filterItem.title}</LabelFilter>
              <TagsContainer>
                {filterItem.tags.map(tagItem => {
                  const isSelected = filters[filterItem.id].includes(
                    tagItem.id as never,
                  );
                  return (
                    <Tag
                      selected={isSelected}
                      onPress={onFilterChange({
                        filterId: filterItem.id,
                        tagId: tagItem.id,
                      })}
                      key={tagItem.id}>
                      <TagText selected={isSelected}>{tagItem.label}</TagText>
                    </Tag>
                  );
                })}
              </TagsContainer>
            </MultiselectContainer>
          ))}
          <Footer>
            <ButtonComponent text="Filtrar" outline onPress={onFilter} />
          </Footer>
        </ContentContainer>
      </Background>
    </Container>
  );
};
