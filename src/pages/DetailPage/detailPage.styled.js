import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 50px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
export const ReviewAndCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 10px;
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  color: #4b3620;
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: black;
  line-height: 1.4;
`;

export const BookMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #4b3620;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row; // 기본은 행 방향
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 50px;

  @media (max-width: 760px) {
    flex-direction: column; // 모바일 뷰에서는 열 방향
  }
`;

export const Button = styled.button`
  background-color: #4b3620;
  color: white;
  border: none;
  padding: 16px 36px;

  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: #885b2b;
  }
`;

export const PurchaseButton = styled(Button)`
  background-color: #ff7737;

  &:hover {
    background-color: #e55715;
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
  height: 2px;
  background-color: #aaa;
  border: none;
`;

export const Content = styled.p`
  margin: 5px 0 20px 0;
  color: #4b3620;
  font-size: 18px;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const TaxDeductionLabel = styled.span`
  font-size: 12px;
  color: #333;
  font-weight: normal;
  border: 1px solid lightgray;
  padding: 5px;
`;

export const BestSellerRank = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: normal;
  margin-left: 10px;
`;

///추가
export const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

// 도서 카테고리
export const BookCategory = styled.div`
  // margin-top: 10px;
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
export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto; // 두 개의 컬럼
  grid-template-rows: repeat(3, auto); // 세 개의 행
  gap: 14px;
  align-items: center;
  font-size: 16px; // 글씨 크기 증가
`;

export const BookPriceSales = styled.p`
  color: #ff7737; // 색상 변경
  font-size: 24px; // 글씨 크기 변경
  font-weight: bold;
`;
export const DiscountLabel = styled.span`
  color: #c72d1b; // 할인율 색상 변경
  font-size: 18px; // 할인율 글씨 크기 변경
`;

export const BookSalePercent = styled.p`
  color: #c72d1b;
  font-size: 18px; // 글씨 크기 변경
  font-weight: bold;
`;

// 정가 및 판매가 등 나머지 텍스트 스타일도 조정 가능
export const BookPriceStandard = styled.p`
  color: #666;
  font-size: 16px; // 글씨 크기 변경
  text-decoration: line-through;
`;

export const PriceLabel = styled.span`
  font-size: 16px; // 글씨 크기 변경
  color: #666;
  font-weight: bold;
`;

export const BookData = styled.p`
  font-size: 16px; // 글씨 크기 변경
  color: #666;
`;

/////////
// 요약
export const BookDescription = styled.p`
  margin-top: 20px;
  color: #595959;
  font-size: 16px;
  line-height: 22px;
`;

// 평점
export const BookReview = styled.p`
  margin-top: 20px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
export const PaymentBenefitsContainer = styled.div`
  display: flex;
  flex-direction: row; // 요소들을 수평 방향으로 배열
  align-items: center; // 요소들을 수직 방향 중앙에 위치
  gap: 20px; // 제목과 설명 사이의 공간
  width: 100%; // 컨테이너가 전체 너비를 차지하도록 설정하여 제목과 설명이 나란히 들어갈 수 있게 함
`;

export const PaymentBenefitsTitle = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: normal;
`;

// export const PaymentBenefitsDescription = styled.span`
//   font-size: 14px;
//   color: #333;
//   font-weight: normal;
// `;
export const PaymentBenefitsDescription = styled.div`
  display: flex; // Flexbox 사용
  align-items: center; // 세로 중앙 정렬
  gap: 20px; // 요소 사이 간격
  // margin-bottom: 10px;
  color: #666;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #885b2b;
  font-size: 22px;
  font-weight: 600;
  padding-top: 15px;
  padding-bottom: 4px;
`;
