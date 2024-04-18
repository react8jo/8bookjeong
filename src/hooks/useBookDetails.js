import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

// 도서 상세 정보를 가져오는 함수
const fetchBookDetails = async (isbn13) => {
  console.log('Fetching details for ISBN:', isbn13); // ISBN 로깅
  try {
    const response = await api.get('/ItemLookUp.aspx', {
      params: {
        ItemId: isbn13,
        ItemIdType: 'ISBN13',
        output: 'JS', // JSON 형식으로 출력
        Version: '20131101',
        OptResult: 'ebookList,usedList,reviewList,subInfo,authors' // 필요한 모든 정보를 포함하도록 OptResult를 확장
      }
    });
    console.log('API Response:', response.data); // API 응답 로깅
    // 전체 item 객체를 반환하도록 변경
    return response.data.item[0]; // 데이터가 리스트 형태로 오는 경우가 있을 수 있으므로 첫 번째 항목 반환
  } catch (error) {
    console.error('API Error:', error);
    throw error; // 에러를 다시 throw하여 React Query의 error handling 사용
  }
};

// 커스텀 훅 정의
export const useBookDetailsQuery = (isbn13) => {
  return useQuery({
    queryKey: ['bookDetails', isbn13],
    queryFn: () => fetchBookDetails(isbn13),
    enabled: !!isbn13 && /^\d{13}$/.test(isbn13) // ISBN이 제공되었고, 13자리 숫자인지 검증
  });
};
