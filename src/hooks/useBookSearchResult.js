import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookSearchResult = async ({ query, start, maxResults, sort }) => {
  const response = await api.get('/ItemSearch.aspx', {
    params: {
      Query: query,
      MaxResults: maxResults,
      start: start,
      Sort: sort,
      SearchTarget: 'Book'
    }
  });
  return response.data;
};
export const useBookSearchResultQuery = ({ query, start, maxResults, sort }) => {
  return useQuery({
    queryKey: ['BookSearchResult', { query, start, maxResults, sort }],
    queryFn: () => fetchBookSearchResult({ query, start, maxResults, sort })
  });
};
