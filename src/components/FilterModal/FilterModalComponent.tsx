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
  ScrollView,
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

type FilterItem = {
  id: 'category' | 'year';
  title: string;
  tags: string[];
};

const allFilters: FilterItem[] = [
  {
    id: 'category',
    title: 'Selecione a categoria',
    tags: [
      'Biografias',
      'Coleções',
      'Comportamento',
      'Contos',
      'Crítica Literária',
      'Ficção Científica',
      'Folclore',
      'Genealogia',
      'Humor',
      'Infantojuvenis',
      'Jogos',
      'Jornais',
      'Literatura Brasileira',
      'Literatura Estrangeira',
      'Livros Raros',
      'Manuscritos',
      'Poesia',
      'Outros Assuntos',
    ],
  },
  {
    id: 'year',
    title: 'Selecione o ano',
    tags: Array.from({length: 6}, (_, i) =>
      String(new Date().getFullYear() - i),
    ),
  },
];

type FilterChangeProps = {
  filterId: 'category' | 'year';
  tagId: string;
  onFilterPress?: (filters: Filters) => void;
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
          <ScrollView>
            {allFilters.map((filterItem, i) => (
              <MultiselectContainer key={i}>
                <LabelFilter>{filterItem.title}</LabelFilter>
                <TagsContainer>
                  {filterItem.tags.map(tagItem => {
                    const isSelected = filters[filterItem.id].includes(
                      tagItem as never,
                    );
                    return (
                      <Tag
                        selected={isSelected}
                        onPress={onFilterChange({
                          filterId: filterItem.id,
                          tagId: tagItem,
                        })}
                        key={tagItem}>
                        <TagText selected={isSelected}>{tagItem}</TagText>
                      </Tag>
                    );
                  })}
                </TagsContainer>
              </MultiselectContainer>
            ))}
          </ScrollView>
          <Footer>
            <ButtonComponent text="Filtrar" outline onPress={onFilter} />
          </Footer>
        </ContentContainer>
      </Background>
    </Container>
  );
};
