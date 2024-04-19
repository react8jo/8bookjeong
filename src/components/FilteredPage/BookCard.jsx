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

      {books.map((book) => (
        <S.BookContainer key={book.itemId} onClick={() => goToBookDetailPage(book.isbn)}>
          <S.BookCover src={book.cover} alt={book.title} />
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
