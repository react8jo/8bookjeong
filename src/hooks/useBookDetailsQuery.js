import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

// 도서 상세 정보를 가져오는 함수
const fetchBookDetails = async (isbn) => {
  const response = await api.get('/ItemLookUp.aspx', {
    params: {
      ItemId: isbn,
      ItemIdType: 'ISBN13', // ISBN13을 사용
      output: 'JS', // JSON 형식으로 출력
      Version: '20131101',
      OptResult: 'ebookList,usedList,reviewList' // 추가 정보 요청
    }
  });
  return response.data;
};

// 커스텀 훅 정의
export const useBookDetailsQuery = (isbn) => {
  return useQuery({
    queryKey: ['bookDetails', isbn], // ISBN을 키로 사용하여 캐싱
    queryFn: () => fetchBookDetails(isbn),
    enabled: !!isbn // ISBN이 제공될 때만 쿼리 활성화
  });
};
