import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
export const ReviewAndCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
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
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 50px;

  @media (max-width: 760px) {
    flex-direction: column;
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
  color: #333;
  font-size: 16px;
  padding-bottom: 20px;
  padding-top: 10px;

  div {
    margin-bottom: 10px; // 각 줄 사이에 간격 추가
  }
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
  font-weight: 600;
`;

// 한 줄에 표시되는 책 정보 라인
export const BookInfoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap; // 내용이 많아지면 다음 줄로 넘어가도록 설정
  margin-top: 10px;
  gap: 4px; // 요소 사이에 간격 추가
`;

// 책 정보
export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(3, auto);
  gap: 14px;
  align-items: center;
  font-size: 16px;
`;

export const BookPriceSales = styled.p`
  color: #ff7737;
  font-size: 24px;
  font-weight: bold;
`;
export const DiscountLabel = styled.span`
  color: #c72d1b;
  font-size: 18px;
`;

export const BookSalePercent = styled.p`
  color: #c72d1b;
  font-size: 18px;
  font-weight: bold;
`;

// 정가 및 판매가 등 나머지 텍스트 스타일도 조정 가능
export const BookPriceStandard = styled.p`
  color: #666;
  font-size: 16px;
  // text-decoration: line-through;
`;

export const PriceLabel = styled.span`
  font-size: 16px;
  color: #666;
  font-weight: bold;
`;

export const BookData = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0; // 마진 초기화
  line-height: 18px; // 라인 높이 설정
  flex-wrap: nowrap;
`;

/////////
// 요약
export const BookDescription = styled.p`
  // margin-top: 20px;
  color: #595959;
  font-size: 16px;
  line-height: 22px;
`;

// 평점
export const BookReview = styled.p`
  margin-top: 10px;
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;
export const PaymentBenefitsContainer = styled.div`
  display: flex;
  flex-direction: row; // 기본적으로 행 방향
  align-items: start;
  gap: 20px;
  width: 100%;
  padding-left: 4px;

  @media (max-width: 768px) {
    flex-direction: column; // 모바일에서는 요소들을 수직 방향으로 쌓음
  }
`;

export const PaymentBenefitsTitle = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 600;
  white-space: nowrap;
`;

export const PaymentBenefitsDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
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
