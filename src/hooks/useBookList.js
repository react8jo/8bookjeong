import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookList = async ({ querytype, start, maxResults, categoryId }) => {
  const response = await api.get('/ItemList.aspx', {
    params: {
      QueryType: querytype,
      MaxResults: maxResults,
      start: start,
      CategoryId: categoryId,
      SearchTarget: 'Book'
    }
  });
  return response.data;
};
export const useBookListQuery = ({ querytype, start, maxResults, categoryId }) => {
  return useQuery({
    queryKey: ['BookList', { querytype, start, maxResults, categoryId }],
    queryFn: () => fetchBookList({ querytype, start, maxResults, categoryId })
  });
};
