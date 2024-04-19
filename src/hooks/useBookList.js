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
const fetchNewSpecialBookList = async () => {
  const response = await api.get('/ItemList.aspx', {
    params: {
      QueryType: 'ItemNewSpecial',
      MaxResults: 10,
      start: 1,
      SearchTarget: 'Book',
      output: 'JS',
      Version: '20131101',
      Cover: 'Big'
    }
  });
  return response.data;
};
export const useNewSpecialBookListQuery = () => {
  return useQuery({
    queryKey: ['newSpecialBookList'],
    queryFn: fetchNewSpecialBookList
  });
};

const fetchBookBlogBest = async () => {
  const response = await api.get('/ItemList.aspx', {
    params: {
      QueryType: 'BlogBest',
      MaxResults: 20,
      start: 1,
      SearchTarget: 'Book',
      output: 'JS',
      Version: '20131101',
      Cover: 'Big'
    }
  });
  return response.data;
};
export const useBookBlogBestQuery = () => {
  return useQuery({
    queryKey: ['BookBlogBest'],
    queryFn: fetchBookBlogBest
  });
};
