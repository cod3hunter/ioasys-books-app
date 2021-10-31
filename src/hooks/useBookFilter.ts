import {Filters} from '@components/FilterModal/FilterModalComponent';
import {useEffect, useState} from 'react';

type UseBookFilterProps = {
  data: Book[];
  filters: Filters;
  textFilter: string;
};

export const useBookFilter = ({
  data,
  filters,
  textFilter,
}: UseBookFilterProps) => {
  const [dataFiltered, setDataFiltered] = useState<Book[]>([]);
  useEffect(() => {
    let currentBooks = [...data];
    if (filters.category.length > 0) {
      currentBooks = currentBooks.filter(book =>
        filters.category.includes(book.category as never),
      );
    }
    if (filters.year.length > 0) {
      currentBooks = currentBooks.filter(book =>
        filters.year.includes(String(book.published) as never),
      );
    }
    if (textFilter) {
      currentBooks = currentBooks.filter(book => {
        if (
          book.title.toLocaleLowerCase().includes(textFilter) ||
          book.category.toLocaleLowerCase().includes(textFilter) ||
          String(book.published).includes(textFilter)
        ) {
          return true;
        }
        return book.authors.some(author =>
          author.toLocaleLowerCase().includes(textFilter),
        );
      });
    }
    setDataFiltered(currentBooks);
  }, [data, filters, textFilter]);
  return dataFiltered;
};
