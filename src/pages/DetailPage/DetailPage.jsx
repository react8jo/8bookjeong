import React, { useEffect, useRef, useState } from 'react';
import * as S from './detailPage.styled';
import { useParams } from 'react-router-dom';
// import { useBookDetailsQuery } from '../../hooks/useBookDetails';
import { useBookDetailQuery } from '../../hooks/useBookDetail';
import ReturnExchangeTable from '../../components/DetailPage/DetailFooter/DetailFooter';
import TabsComponent from '../../components/DetailPage/Tabs/Tabs';
import AddressChange from '../../components/DetailPage/AddressChange /AddressChange';
import AdBanner from '../../components/MainPage/AdBanner/AdBanner';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import BookImg from '../../components/DetailPage/BookImg/BookImg';
import ScrollToTopButton from '../../components/DetailPage/ScrollToTopButton/ScrollToTopButton';
import ProductInfo from '../../components/DetailPage/ProductInfo/ProductInfo';
import QuantitySelector from '../../components/DetailPage/QuantitySelector/QuantitySelector';

function DetailPage() {
  const { isbn13 } = useParams();
  //api호출수정//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const { data: book, isLoading, isError, error } = useBookDetailsQuery({ isbn: isbn13 });
  const { data: book, isLoading, isError, error } = useBookDetailQuery({ isbn: isbn13 });
  //api호출수정//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [activeTab, setActiveTab] = useState('bookInfo');
  const bookInfoRef = useRef(null);
  const deliveryRef = useRef(null);
  const [address, setAddress] = useState('기본 주소');

  useEffect(() => {
    if (book) {
      console.log('Book data:', book);
    }
  }, [book]);

  useEffect(() => {
    if (activeTab === 'bookInfo' && bookInfoRef.current) {
      bookInfoRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (activeTab === 'delivery' && deliveryRef.current) {
      deliveryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeTab]);

  if (isLoading) {
    return <S.StyledDetailPage>Loading...</S.StyledDetailPage>;
  }
  if (isError) {
    return <S.StyledDetailPage>Error: {error.message}</S.StyledDetailPage>;
  }
  if (!book) {
    return <S.StyledDetailPage>No book details available.</S.StyledDetailPage>;
  }

  return (
    <>
      <Header />
      <S.StyledDetailPage>
        <S.BookContent>
          <BookImg cover={book.item[0].cover} title={book.item[0].title} />

          <S.BookInfoContainer>
            <S.InfoHeader>
              <div>
                <S.TaxDeductionLabel>소득공제</S.TaxDeductionLabel>
                <S.BestSellerRank>{book.item[0].subInfo.bestSellerRank}</S.BestSellerRank>
              </div>
              <S.BookCategory>{book.item[0].categoryName}</S.BookCategory>
            </S.InfoHeader>
            <S.StyledTitle>{book.item[0].title}</S.StyledTitle>

            <S.BookInfo>
              <S.ReviewAndCategoryContainer>
                <S.BookReview>{`★ ${book.item[0].customerReviewRank}.0`}</S.BookReview>
                <S.BookInfoLine>
                  <S.BookData>{book.item[0].author}</S.BookData>
                  <S.BookData>|</S.BookData>
                  <S.BookData>{book.item[0].publisher}</S.BookData>
                  <S.BookData>|</S.BookData>
                  <S.BookData>{book.item[0].pubDate}</S.BookData>
                </S.BookInfoLine>
              </S.ReviewAndCategoryContainer>

              <S.Line />

              {/* <S.PriceLine>
                <S.BookSalePercent>{`${((book.item[0].priceStandard - book.item[0].priceSales) / book.item[0].priceStandard) * 100}%`}</S.BookSalePercent>
                <S.BookPriceSales>{`${book.item[0].priceSales.toLocaleString()}원`}</S.BookPriceSales>
                <S.BookPriceStandard>{`${book.item[0].priceStandard.toLocaleString()}원`}</S.BookPriceStandard>
              </S.PriceLine> */}
              <S.PriceGrid>
                <S.PriceLabel>정가</S.PriceLabel>
                <S.BookPriceStandard>{`${book.item[0].priceStandard.toLocaleString()}원`}</S.BookPriceStandard>

                <S.PriceLabel>판매가</S.PriceLabel>
                <S.BookPriceSales>{`${book.item[0].priceSales.toLocaleString()}원`}</S.BookPriceSales>
                <S.BookSalePercent>{`${((book.item[0].priceStandard - book.item[0].priceSales) / book.item[0].priceStandard) * 100}%`}</S.BookSalePercent>

                <S.PriceLabel>팔북정 포인트</S.PriceLabel>
                <S.BookData>{`${book.item[0].mileage.toLocaleString()}원`}</S.BookData>
              </S.PriceGrid>

              {/* <S.BookReview>{`⭐️ ${book.item[0].customerReviewRank}.0`}</S.BookReview> */}
            </S.BookInfo>

            <S.Line />
            <S.PaymentBenefitsContainer>
              <S.PaymentBenefitsTitle>결제혜택</S.PaymentBenefitsTitle>
              <S.PaymentBenefitsDescription>카드/간편결제 혜택을 확인하세요</S.PaymentBenefitsDescription>
            </S.PaymentBenefitsContainer>
            <S.Line />
            <S.PaymentBenefitsContainer>
              <S.PaymentBenefitsTitle>배송안내</S.PaymentBenefitsTitle>
              <S.PaymentBenefitsDescription>
                서울특별시 영등포구 은행로 11(여의도동,일신빌딩){' '}
              </S.PaymentBenefitsDescription>
              <div>
                <h2>주소: {address}</h2>
                <AddressChange setAddress={setAddress} />
              </div>
            </S.PaymentBenefitsContainer>

            <S.Line />

            <S.ButtonGroup>
              <QuantitySelector />
              <S.Button>장바구니에 담기</S.Button>
              <S.PurchaseButton>바로 구매하기</S.PurchaseButton>
            </S.ButtonGroup>
          </S.BookInfoContainer>
        </S.BookContent>
        {/* <AdBanner /> */}
        <TabsComponent activeTab={activeTab} onTabClick={setActiveTab} />
        <div ref={bookInfoRef}>
          <div>
            <S.SectionTitle>품목정보</S.SectionTitle>
            <ProductInfo book={book} />
            <S.SectionTitle>관련 분류</S.SectionTitle>
            <S.Content>카테고리 분류</S.Content>
            <S.BookDescription>{book.item[0].categoryName}</S.BookDescription>
            <S.Line />
            <S.SectionTitle>책 소개</S.SectionTitle>
            <S.BookDescription>{book.item[0].description || 'No description available.'}</S.BookDescription>
            <S.Line />
            <S.SectionTitle>Link</S.SectionTitle>
            <S.Content>
              <a href={book.link} target='_blank' rel='noopener noreferrer'>
                More Details
              </a>
            </S.Content>
          </div>
        </div>
        <AdBanner />
        <div ref={deliveryRef}>
          <ReturnExchangeTable />
        </div>
        <ScrollToTopButton />
      </S.StyledDetailPage>
      <Footer />
    </>
  );
}
export default DetailPage;
