import React, { useEffect } from 'react';
import * as S from './detailPage.styled';
import { useParams } from 'react-router-dom';
import { useBookDetailsQuery } from '../../hooks/useBookDetails';
import ReturnExchangeTable from '../../components/DetailPage/DetailFooter/DetailFooter';

function DetailPage() {
  const { isbn13 } = useParams();
  const { data: book, isLoading, isError, error } = useBookDetailsQuery({ isbn: isbn13 });

  useEffect(() => {
    if (book) {
      console.log('Book data:', book); // 콘솔에 도서 데이터 로깅
    }
  }, [book]); // book 데이터가 변경될 때마다 실행

  if (isLoading) {
    return <S.StyledDetailPage>Loading...</S.StyledDetailPage>;
  }
  if (isError) {
    console.error('Error fetching book details:', error);
    return <S.StyledDetailPage>Error: {error.message}</S.StyledDetailPage>;
  }
  if (!book) {
    return <S.StyledDetailPage>No book details available.</S.StyledDetailPage>;
  }

  return (
    <S.StyledDetailPage>
      <S.BookContent>
        <S.BookImage src={book.item[0].cover} alt={`Cover of the book ${book.item[0].title}`} />
        <S.BookInfoContainer>
          <S.InfoHeader>
            <S.TaxDeductionLabel>소득공제</S.TaxDeductionLabel>
            <S.BestSellerRank>{book.item[0].subInfo.bestSellerRank}</S.BestSellerRank>
          </S.InfoHeader>
          <S.StyledTitle>{book.item[0].title}</S.StyledTitle>

          <S.BookInfo>
            <S.BookCategory>{book.item[0].categoryName}</S.BookCategory>
            <S.BookInfoLine>
              <S.BookData>{book.item[0].author}</S.BookData>
              <S.BookData>|</S.BookData>
              <S.BookData>{book.item[0].publisher}</S.BookData>
              <S.BookData>|</S.BookData>
              <S.BookData>{book.item[0].pubDate}</S.BookData>
            </S.BookInfoLine>
            <S.PriceLine>
              <S.BookSalePercent>{`${((book.item[0].priceStandard - book.item[0].priceSales) / book.item[0].priceStandard) * 100}%`}</S.BookSalePercent>
              <S.BookPriceSales>{`${book.item[0].priceSales.toLocaleString()}원`}</S.BookPriceSales>
              <S.BookPriceStandard>{`${book.item[0].priceStandard.toLocaleString()}원`}</S.BookPriceStandard>
            </S.PriceLine>
            <S.BookDescription>{book.item[0].description}</S.BookDescription>
            <S.BookReview>{`⭐️ ${book.item[0].customerReviewRank}.0`}</S.BookReview>
          </S.BookInfo>

          <S.Line />
          <S.PaymentBenefitsContainer>
            <S.PaymentBenefitsTitle>결제혜택</S.PaymentBenefitsTitle>
            <S.PaymentBenefitsDescription>카드/간편결제 혜택을 확인하세요</S.PaymentBenefitsDescription>
          </S.PaymentBenefitsContainer>

          <S.Line />
          <p>평점: {book.item[0].customerReviewRank}</p>
          <p>가격: {book.item[0].priceSales}</p>
          <S.Line />
          <S.ButtonGroup>
            <S.Button>장바구니에 담기</S.Button>
            <S.Button>바로 구매하기</S.Button>
          </S.ButtonGroup>
        </S.BookInfoContainer>
      </S.BookContent>
      <S.Line />
      <div>
        <S.SectionTitle>이 책이 속한 분야</S.SectionTitle>
        <S.Content>{book.item[0].categoryName}</S.Content>
        <S.Line />
        <S.SectionTitle>책 소개</S.SectionTitle>
        <S.Content>{book.item[0].description || 'No description available.'}</S.Content>
        <S.Line />
        <S.SectionTitle>Link</S.SectionTitle>
        <S.Content>
          <a href={book.link} target='_blank' rel='noopener noreferrer'>
            More Details
          </a>
        </S.Content>
      </div>
      <ReturnExchangeTable />
    </S.StyledDetailPage>
  );
}
export default DetailPage;
