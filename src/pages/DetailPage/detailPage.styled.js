import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 100px;
  // background-color: pink;
  color: rgb(137, 146, 39);
  max-width: 1200px; // 최대 너비 설정
  margin: 0 auto; // 자동 마진으로 중앙 정렬
  width: 100%; // 전체 너비를 사용
`;

export const BookImage = styled.img`
  width: 300px;
  height: auto;
  margin-right: 40px;
  margin-bottom: 50px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // 그림자를 더 진하게 조정
  transition: transform 0.4s ease-in-out; // 애니메이션 속도를 조금 느리게 조정

  &:hover {
    transform: scale(1.04);
  }
`;

export const BookContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  color: #003366;
`;

export const StyledTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: black;
`;

export const BookMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #003366;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: #899227;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: RGB(110, 117, 31);
  }
`;

export const PurchaseButton = styled(Button)`
  background-color: #1b3720;

  &:hover {
    background-color: #21542a; // 호버시 배경색
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin: 20px 0;
  height: 2px; // 선의 굵기 조절
  background-color: #aaa; // 중간 회색으로 설정
  border: none; // 기본 테두리 제거
`;

export const Content = styled.p`
  margin: 5px 0 20px 0;
  color: #899227;
  font-size: 18px;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px; // 간격 조절
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
  font-size: 16px; // 글씨 크기를 16px로 변경
  line-height: 22px;
`;

// 평점
export const BookReview = styled.p`
  margin-top: 20px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
`;
export const PaymentBenefitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PaymentBenefitsTitle = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: normal;
`;

export const PaymentBenefitsDescription = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: normal;
`;
export const SectionTitle = styled.h2`
  margin-bottom: 10px;
  color: #899227;
  font-size: 22px;
`;

export const ProductInfoTable = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 30px; // 전체 테이블의 하단에 패딩 추가

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #bbb; // 굵고 진한 상단 테두리
    border-bottom: 2px solid #bbb; // 굵고 진한 하단 테두리

    th,
    td {
      padding: 8px;
      text-align: left;
      border-left: none; // 양옆 테두리 없애기
      border-right: none;
      border-bottom: 1px solid #ccc; // 행 사이의 구분선 유지
    }

    th {
      background-color: #f8f8f8; // 헤더의 배경색을 연하게
      // font-weight: 600;
    }

    td {
      background-color: transparent; // td의 배경색을 투명하게 설정
    }
  }
`;
