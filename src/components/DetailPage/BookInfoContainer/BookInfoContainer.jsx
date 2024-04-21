import React from 'react';
import * as S from './bookInfoContainer.styled';
import AddressChange from '../AddressChange /AddressChange';

const BookInfoContainer = ({ book, address, setAddress }) => {
  return (
    <S.BookInfoContainer>
      <S.InfoHeader>
        <S.TaxDeductionLabel>소득공제</S.TaxDeductionLabel>
        <S.BestSellerRank>{book.subInfo.bestSellerRank}</S.BestSellerRank>
      </S.InfoHeader>
      <S.StyledTitle>{book.title}</S.StyledTitle>

      <S.BookInfo>
        <S.BookCategory>{book.categoryName}</S.BookCategory>
        <S.Line />
        <S.BookInfoLine>
          <S.BookData>{book.author}</S.BookData>
          <S.BookData>|</S.BookData>
          <S.BookData>{book.publisher}</S.BookData>
          <S.BookData>|</S.BookData>
          <S.BookData>{book.pubDate}</S.BookData>
        </S.BookInfoLine>
        <S.PriceLine>
          <S.BookSalePercent>{`${((book.priceStandard - book.priceSales) / book.priceStandard) * 100}%`}</S.BookSalePercent>
          <S.BookPriceSales>{`${book.priceSales.toLocaleString()}원`}</S.BookPriceSales>
          <S.BookPriceStandard>{`${book.priceStandard.toLocaleString()}원`}</S.BookPriceStandard>
        </S.PriceLine>

        <S.BookReview>{`⭐️ ${book.customerReviewRank}.0`}</S.BookReview>
      </S.BookInfo>

      <S.Line />
      <S.PaymentBenefitsContainer>
        <S.PaymentBenefitsTitle>결제혜택</S.PaymentBenefitsTitle>
        <S.PaymentBenefitsDescription>카드/간편결제 혜택을 확인하세요</S.PaymentBenefitsDescription>
      </S.PaymentBenefitsContainer>
      <S.Line />
      <S.PaymentBenefitsContainer>
        <S.PaymentBenefitsTitle>배송안내</S.PaymentBenefitsTitle>
        <S.PaymentBenefitsDescription>서울특별시 영등포구 은행로 11(여의도동, 일신빌딩) </S.PaymentBenefitsDescription>
        <div>
          <h2>주소: {address}</h2>
          <AddressChange setAddress={setAddress} />
        </div>
      </S.PaymentBenefitsContainer>

      <S.Line />

      <S.ButtonGroup>
        <S.Button>장바구니에 담기</S.Button>
        <S.PurchaseButton>바로 구매하기</S.PurchaseButton>
      </S.ButtonGroup>
    </S.BookInfoContainer>
  );
};

export default BookInfoContainer;
