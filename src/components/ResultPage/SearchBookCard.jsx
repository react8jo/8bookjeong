import React from 'react';

import * as S from './SearchBookCard.styled';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const [imgStyle, setImgStyle] = useState({});
  const navigate = useNavigate();

  const img = new Image();
  img.src = book.cover;
  img.onload = () => {
    const divAspect = 200 / 350;
    const imgAspect = img.height / img.width;

    if (imgAspect <= divAspect) {
      const imgWidthActual = (window.innerHeight * img.width) / img.height;
      const imgWidthToBe = (window.innerHeight * 200) / 350;
      const marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2);
      setImgStyle({
        width: 'auto',
        height: '100%',
        marginLeft: `${marginLeft}px`
      });
    } else {
      setImgStyle({
        width: '100%',
        height: 'auto',
        marginLeft: '0'
      });
    }
  };

  const goToBookDetailPage = () => {
    navigate(`/products/${book.isbn}`);
  };

  return (
    <S.BookContainer>
      <S.BookCard>
        <div onClick={goToBookDetailPage} style={{ width: '300px', height: '400px', overflow: 'hidden' }}>
          <img src={book.cover} alt={book.title} style={imgStyle} />
        </div>
        <S.BookInfo>
          <S.TextEllipsis>{book.title}</S.TextEllipsis>
          <S.BookDetail>
            <S.BookDetailInfo>{book.author}</S.BookDetailInfo>
            <S.BookDetailInfo>
              {book.pubDate} / {book.publisher}
            </S.BookDetailInfo>
          </S.BookDetail>
          <S.BookSub>
            <S.BookSubInfo>
              <S.BookSalePercent>10%</S.BookSalePercent>
              <S.BookSale>{Number(book.priceStandard * 0.9).toLocaleString()}원</S.BookSale>
              <S.BookPrice>{Number(book.priceStandard).toLocaleString()}원</S.BookPrice>
            </S.BookSubInfo>
            <S.BookSubInfo>⭐️ {book.customerReviewRank}.0</S.BookSubInfo>
          </S.BookSub>
          <S.BookAdd>찜하기</S.BookAdd>
        </S.BookInfo>
      </S.BookCard>
    </S.BookContainer>
  );
};

export default BookCard;
