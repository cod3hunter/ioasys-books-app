import {doGet} from '@services/RequestService';
import {useEffect, useState} from 'react';

type UseBooksProps = {
  page: number;
  amount?: number;
  category?: string;
};

type UseBooksResponse = {
  data: Book[];
  hasMore: boolean;
  error: string;
  loading: boolean;
};

type BooksResponse = {
  data: Book[];
  page: number;
  totalPages: number;
  totalItems: number;
};

export const useBooks = ({
  page,
  amount = 25,
  category,
}: UseBooksProps): UseBooksResponse => {
  const [data, setData] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    doGet<BooksResponse>({
      path: '/books',
      needAuth: true,
      data: {page, amount, category},
    })
      .then(response => {
        setHasMore(response.data.page < response.data.totalPages);
        setData(old => [...old, ...response.data.data]);
      })
      .catch(e => {
        setError(
          e.response?.data?.errors?.message || 'Infelizmente, algo deu errado.',
        );
      })
      .finally(() => setLoading(false));
  }, [page, amount, category]);

  return {data, hasMore, error, loading};
};
