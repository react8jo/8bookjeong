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

  @media (max-width: 1024px) {
    width: 700px;
    height: 180px;
    align-items: center;
    padding: 16px 0 0 16px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    width: 355px;
    height: 170px;
    align-items: center;
    padding: 16px;
    margin-top: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

// 도서 이미지
export const BookImage = styled.img`
  width: 148px;
  height: auto;
  margin-right: 16px;

  @media (max-width: 1024px) {
    width: 100px;
  }
  @media (max-width: 768px) {
    width: 80px;
    margin: 16px;
  }
`;

// 도서 정보 텍스트 영역
export const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 15px;

  @media (max-width: 768px) {
    padding-right: 5px;
  }
`;

// 도서명
export const BookTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// 도서 카테고리
export const BookCategory = styled.div`
  margin-top: 10px;
  font-size: 14px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

// 한 줄에 표시되는 책 정보 라인
export const BookInfoLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

// 책 저자
export const BookAuthor = styled.p`
  margin-top: 4px;
  margin-right: 8px;
  color: #666;
  font-size: 14px;

  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// 출판사
export const BookPublisher = styled.p`
  margin-top: 4px;
  margin-right: 8px;
  color: #666;
  font-size: 14px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

// 책 출판일
export const BookPubDate = styled.p`
  margin-top: 4px;
  margin-right: 8px;
  color: #666;
  font-size: 14px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// 나눔자 |
export const Divide = styled.p`
  margin-top: 4px;
  margin-right: 8px;
  color: #666;
  font-size: 14px;

  @media (max-width: 1024px) {
    display: none;
  }
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
  color: rgb(137, 146, 39);
  ${'' /* color: #4dac27; */}
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// 할인가
export const BookPriceSales = styled.p`
  margin-right: 8px;
  color: #000;
  font-size: 15px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// 정상가
export const BookPriceStandard = styled.p`
  margin-right: 8px;
  color: #666;
  font-size: 12px;
  text-decoration: line-through;

  @media (max-width: 768px) {
    display: none;
  }
`;

// 요약
export const BookDescription = styled.p`
  margin-top: 20px;
  color: #595959;
  font-size: 13px;
  line-height: 22px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

// 평점
export const BookReview = styled.p`
  margin-top: 20px;
  color: #000;
  font-weight: bold;
  font-size: 14px;
`;
