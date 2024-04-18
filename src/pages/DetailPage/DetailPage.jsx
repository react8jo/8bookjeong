import React from 'react';
import * as S from './detailPage.styled';
import { useParams } from 'react-router-dom';
import { useBookDetailsQuery } from '../../hooks/useBookDetailsQuery';

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
          <S.BookMeta>
            <span>{book.author}</span>
            <span>{book.publisher}</span>
            <span>{book.pubDate}</span>
          </S.BookMeta>
          <p>Rating: {book.customerReviewRank}</p>
          <p>Price: {book.priceSales}</p>
          <S.ButtonGroup>
            <S.Button>Add to Cart</S.Button>
            <S.Button>Buy Now</S.Button>
          </S.ButtonGroup>
        </S.BookInfo>
      </S.BookContent>
      <S.Line />
      <div>
        <S.SectionTitle>Categories</S.SectionTitle>
        <S.Content>{book.categoryName}</S.Content>
        <S.Line />
        <S.SectionTitle>Description</S.SectionTitle>
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
