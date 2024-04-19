import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookDetail = async (isbn) => {
  const response = await api.get('/ItemLookUp.aspx', {
    params: {
      ItemId: isbn,
      SearchTarget: 'Book'
    }
  });
  return response.data;
};

export const useBookDetailQuery = ({ isbn }) => {
  return useQuery({
    queryKey: ['BookDetail', { isbn }],
    queryFn: () => fetchBookDetail({ isbn })
  });
};
