import React from 'react';
import * as S from './detailPage.styled'; // 스타일 파일을 S 객체로 가져옴
import { useParams } from 'react-router-dom';
import { useBookDetailsQuery } from '../../hooks/useBookDetailsQuery';

function DetailPage() {
  const { isbn } = useParams(); // useParams 훅을 사용해 ISBN 추출
  const { data: book, isLoading, isError, error } = useBookDetailsQuery(isbn); // 커스텀 훅 사용

  // 데이터 로딩 중 상태 처리
  if (isLoading) return <S.StyledDetailPage>Loading...</S.StyledDetailPage>;

  // 에러 발생 시 처리
  if (isError) {
    console.error('Error fetching book details:', error);
    return <S.StyledDetailPage>Error: {error.message}</S.StyledDetailPage>;
  }

  // 도서 정보가 없을 경우 처리
  if (!book) return <S.StyledDetailPage>No book details available.</S.StyledDetailPage>;

  // 도서 정보 로그 출력
  console.log('Book Details:', book);

  return (
    <S.StyledDetailPage>
      <S.BookImage src={book.imageUrl} alt={`Cover of the book ${book.title}`} />
      <S.BookInfo>
        <h1>{book.title}</h1>
        <S.BookMeta>
          <span>{book.author}</span>
          <span>{book.publisher}</span>
          <span>{book.publishedDate}</span>
        </S.BookMeta>
        <p>Rating: {book.rating}</p>
        <p>Price: {book.price}</p>

        <S.ButtonGroup>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </S.ButtonGroup>
      </S.BookInfo>

      <S.Line />

      <div>
        <S.SectionTitle>Categories</S.SectionTitle>
        <S.Content>{book.categories.join(', ')}</S.Content>
        <S.SectionTitle>ISBN</S.SectionTitle>
        <S.Content>{book.isbn}</S.Content>
        <S.SectionTitle>Pages</S.SectionTitle>
        <S.Content>{book.pageCount}</S.Content>
      </div>

      <S.Line />

      <div>
        <S.SectionTitle>Table of Contents</S.SectionTitle>
        <S.Content>{book.tableOfContents}</S.Content>
      </div>

      <S.Line />

      <div>
        <S.SectionTitle>Summary</S.SectionTitle>
        <S.Content>{book.summary}</S.Content>
      </div>

      <S.Line />

      <div>
        <S.SectionTitle>Reviews</S.SectionTitle>
        <S.Content>{book.reviews}</S.Content>
      </div>
    </S.StyledDetailPage>
  );
}

export default DetailPage;
