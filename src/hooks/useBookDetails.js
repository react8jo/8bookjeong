import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookDetails = async ({ isbn }) => {
  const response = await api.get('/ItemLookUp.aspx', {
    params: {
      ItemId: isbn,
      SearchTarget: 'Book',
      OptResult: 'cardReviewImgList,ratingInfo,bestSellerRank,ebookList,usedList'
    }
  });
  return response.data;
};

export const useBookDetailsQuery = ({ isbn }) => {
  return useQuery({
    queryKey: ['BookDetail', { isbn }],
    queryFn: () => fetchBookDetails({ isbn })
  });
};
