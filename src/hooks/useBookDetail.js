import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookDetail = async ({ isbn }) => {
  return await api.get(`/detail?isbn=${isbn}`);
};

export const useBookDetailQuery = ({ isbn }) => {
  return useQuery({
    queryKey: ['Book-detail', { isbn }],
    queryFn: () => fetchBookDetail({ isbn }),
    select: (result) => result.data
  });
};

// const fetchBookDetail = async ({ isbn }) => {
//   const response = await api.get('/ItemLookUp.aspx', {
//     params: {
//       ItemId: isbn,
//       SearchTarget: 'Book',
//       OptResult: 'cardReviewImgList,ratingInfo,bestSellerRank,ebookList,usedList'
//     }
//   });
//   return response.data;
// };

// export const useBookDetailQuery = ({ isbn }) => {
//   return useQuery({
//     queryKey: ['BookDetail', { isbn }],
//     queryFn: () => fetchBookDetail({ isbn })
//   });
// };
