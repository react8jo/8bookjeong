import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchNewBookList = async () => {
  const response = await api.get('/ItemList.aspx', {
    params: {
      QueryType: 'ItemNewAll',
      MaxResults: 10,
      start: 1,
      SearchTarget: 'Book',
      output: 'JS',
      Version: '20131101'
    }
  });
  return response.data;
};
export const useNewBookListQuery = () => {
  return useQuery({
    queryKey: ['newBookList'],
    queryFn: fetchNewBookList
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
      Version: '20131101'
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
