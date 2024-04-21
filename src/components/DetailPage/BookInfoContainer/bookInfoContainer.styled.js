import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 100px;
  // background-color: pink;
  color: rgb(137, 146, 39);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const BookImage = styled.img`
  width: 300px;
  height: auto;
  margin-right: 40px;
  margin-bottom: 50px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease-in-out;

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
  margin-bottom: 50px;
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
    background-color: #21542a;
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
  color: #899227;
  font-size: 18px;
`;

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
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
  font-size: 16px;
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
  padding-bottom: 30px;

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 2px solid #bbb;
    border-bottom: 2px solid #bbb;

    th,
    td {
      padding: 8px;
      text-align: left;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid #ccc;
    }

    th {
      background-color: #f8f8f8;
      // font-weight: 600;
    }

    td {
      background-color: transparent;
    }
  }
`;
