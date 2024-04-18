import styled from 'styled-components';

// 단일도서 전체 컨테이너
export const BookContainer = styled.div`
  display: flex;
  padding: 24px 0 0 16px;
  margin-top: 36px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 984px;
  height: 220px;
  cursor: pointer;
`;

// 도서 이미지
export const BookImage = styled.img`
  width: 140px;
  height: auto;
  margin-right: 16px;
`;

// 도서 정보 텍스트 영역
export const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

// 도서명
export const BookTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

// 도서 카테고리
export const BookCategory = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

// 한 줄에 표시되는 책 정보 라인
export const BookInfoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

// 책 정보
export const BookData = styled.p`
  margin-top: 4px;
  margin-right: 8px;
  color: #666;
  font-size: 14px;
`;

// 한 줄에 표시되는 책 정보 라인
export const PriceLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;

// 할인율
export const BookSalePercent = styled.p`
  margin-right: 8px;
  color: #c72d1b;
  ${'' /* color: #4dac27; */}
  font-size: 16px;
  font-weight: bold;
`;

// 할인가
export const BookPriceSales = styled.p`
  margin-right: 8px;
  color: #000;
  font-size: 15px;
  font-weight: bold;
`;

// 정상가
export const BookPriceStandard = styled.p`
  margin-right: 8px;
  color: #666;
  font-size: 12px;
  text-decoration: line-through;
`;

// 요약
export const BookDescription = styled.p`
  margin-top: 20px;
  color: #595959;
  font-size: 13px;
  line-height: 22px;
`;

// 평점
export const BookReview = styled.p`
  margin-top: 20px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
`;
