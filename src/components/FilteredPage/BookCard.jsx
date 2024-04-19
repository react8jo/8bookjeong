import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nodata from '../../components/common/Nodata/Nodata';
import * as S from './bookCard.styled';

const BooksCard = ({ books }) => {
  const navigate = useNavigate();
  if (!books || books.length === 0)
    return (
      <p>
        <Nodata />
      </p>
    );

  const goToBookDetailPage = (isbn) => {
    console.log(isbn);
    navigate(`/products/${isbn}`);
  };

  return (
    <div>
      {books.map((book, index) => (
        <S.BookContainer key={index} onClick={() => goToBookDetailPage(book.isbn)}>
          <S.BookImage src={book.cover} alt={`${book.title} 표지`} />
          <S.BookInfo>
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookCategory>{book.categoryName}</S.BookCategory>
            <S.BookInfoLine>
              <S.BookAuthor>{book.author}</S.BookAuthor>
              <S.Divide>|</S.Divide>
              <S.BookPublisher>{book.publisher}</S.BookPublisher>
              <S.Divide>|</S.Divide>
              <S.BookPubDate>{book.pubDate}</S.BookPubDate>
            </S.BookInfoLine>
            <S.PriceLine>
              <S.BookSalePercent>{`${((book.priceStandard - book.priceSales) / book.priceStandard) * 100}%`}</S.BookSalePercent>
              <S.BookPriceSales>{`${book.priceSales.toLocaleString()}원`}</S.BookPriceSales>
              <S.BookPriceStandard>{`${book.priceStandard.toLocaleString()}원`}</S.BookPriceStandard>
            </S.PriceLine>
            <S.BookDescription>{book.description}</S.BookDescription>
            <S.BookReview>{`🍀 ${book.customerReviewRank}.0`}</S.BookReview>
          </S.BookInfo>
        </S.BookContainer>
      ))}
    </div>
  );
};

export default BooksCard;

// adult: false;
// author: '김시덕 (지은이)';
// categoryId: 175;
// categoryName: '국내도서>경제경영>재테크/투자>부동산/경매';
// cover: 'https://image.aladin.co.kr/product/33227/91/coversum/k052937152_1.jpg';
// customerReviewRank: 10;
// description: '인문학자 특유의 날선 통찰을 보여주었던 김시덕 박사는 도시 개발에 관한 방대한 자료를 바탕으로 도시의 과거와 현재를 분석해내고, 직접 발로 뛰어 답사한 현장감 있는 사료를 증거 삼아 어디에서도 볼 수 없었던 유일무이한 ‘대한민국 도시의 미래 지도’를 완성해냈다.';
// fixedPrice: true;
// isbn: 'K052937152';
// isbn13: '9791193506295';
// itemId: 332279158;
// link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=332279158&amp;partner=openAPI&amp;start=api';
// mallType: 'BOOK';
// mileage: 1250;
// priceSales: 22500;
// priceStandard: 25000;
// pubDate: '2024-01-17';
// publisher: '포레스트북스';
// salesPoint: 15255;
// stockStatus: '';
// subInfo: {
// }
// title: '한국 도시의 미래 - 인문학자가 직접 탐사한 대한민국 임장 보고서';
