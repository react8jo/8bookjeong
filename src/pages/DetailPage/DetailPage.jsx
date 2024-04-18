import React from 'react';
import * as S from './detailPage.styled';
import { useParams } from 'react-router-dom';
import { useBookDetailsQuery } from '../../hooks/useBookDetails';

function DetailPage() {
  const { isbn13 } = useParams();
  const { data: book, isLoading, isError, error } = useBookDetailsQuery(isbn13);

  if (isLoading) return <S.StyledDetailPage>Loading...</S.StyledDetailPage>;
  if (isError) {
    console.error('Error fetching book details:', error);
    return <S.StyledDetailPage>Error: {error.message}</S.StyledDetailPage>;
  }

  if (!book) return <S.StyledDetailPage>No book details available.</S.StyledDetailPage>;

  return (
    <S.StyledDetailPage>
      <S.BookContent>
        <S.BookImage src={book.cover} alt={`Cover of the book ${book.title}`} />
        <S.BookInfo>
          <h1>{book.title}</h1>
          <S.Line />
          <S.BookMeta>
            <span>작가: {book.author}</span>
            <span>출판사: {book.publisher}</span>
            <span>출간일: {book.pubDate}</span>
          </S.BookMeta>
          <S.Line />
          <p>평점: {book.customerReviewRank}</p>
          <p>가격: {book.priceSales}</p>
          <S.Line />
          <S.ButtonGroup>
            <S.Button>장바구니에 담기</S.Button>
            <S.Button>바로 구매하기</S.Button>
          </S.ButtonGroup>
        </S.BookInfo>
      </S.BookContent>
      <S.Line />
      <div>
        <S.SectionTitle>이 책이 속한 분야</S.SectionTitle>
        <S.Content>{book.categoryName}</S.Content>
        <S.Line />
        <S.SectionTitle>책 소개</S.SectionTitle>
        <S.Content>{book.description || 'No description available.'}</S.Content>
        <S.Line />
        <S.SectionTitle>Link</S.SectionTitle>
        <S.Content>
          <a href={book.link} target='_blank'>
            More Details
          </a>
        </S.Content>
      </div>
    </S.StyledDetailPage>
  );
}

export default DetailPage;
