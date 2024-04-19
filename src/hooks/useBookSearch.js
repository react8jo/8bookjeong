import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookSearch = async ({ query, start, maxResults, sort, categoryId }) => {
  return await api.get(
    `/search?query=${query}&start=${start}&Sort=${sort}&maxResults=${maxResults}&categoryId=${categoryId}`
  );
};
export const useBookSearchQuery = ({ query, start, maxResults, sort, categoryId }) => {
  return useQuery({
    queryKey: ['BookSearch', { query, start, maxResults, sort, categoryId }],
    queryFn: () => fetchBookSearch({ query, start, maxResults, sort, categoryId }),
    select: (result) => result.data
  });
};

// const fetchBookSearch = async ({ query, start, maxResults, sort, categoryId }) => {
//   const response = await api.get('/ItemSearch.aspx', {
//     params: {
//       Query: query,
//       MaxResults: maxResults,
//       start: start,
//       Sort: sort,
//       CategoryId: categoryId,
//       SearchTarget: 'Book'
//     }
//   });
//   return response.data;
// };
// export const useBookSearchQuery = ({ query, start, maxResults, sort, categoryId }) => {
//   return useQuery({
//     queryKey: ['BookSearch', { query, start, maxResults, sort, categoryId }],
//     queryFn: () => fetchBookSearch({ query, start, maxResults, sort, categoryId })
//   });
// };
