import React from 'react';
import * as S from './banner.styled';
import { useEffect, useState } from 'react';
import { useBookSearchQuery } from '../../../hooks/useBookSearch';
import { useBookListQuery } from '../../../hooks/useBookList';
import { useBookDetailQuery } from '../../../hooks/useBookDetail';

export default function Banner() {
  // const { data: newBookList, isLoading, isError } = useNewBookListQuery();
  // useEffect(() => {
  //   if (newBookList) {
  //     console.log(newBookList);
  //   }
  // }, [newBookList]);

  // ////////////////////////////// 1. 상품 검색 API 테스트 //ItemSearch.aspx //////////////////////////////
  // // Query : 검색어 (문자열) (*필수값)
  // // start : 1이상, 양의 정수 (기본값:1)           //검색결과 시작페이지
  // // MaxResults : 1이상 100이하 양의정수 (기본값10) //검색결과 한페이지당 최대 출력개수
  // // Sort
  // //   ㄴ Accuracy(기본값): 관련도
  // //   ㄴ PublishTime : 출간일
  // //   ㄴ Title : 제목
  // //   ㄴ SalesPoint : 판매량
  // //   ㄴ CustomerRating 고객평점
  // //   ㄴ MyReviewCount :마이리뷰갯수
  // // categoryId : //양의정수 - 분야의 고유 번호(기본값:0, 전체) (참고 : 알라딘 모든 분야 카테고리)
  // // 알라딘카테고리파일url : https://image.aladin.co.kr/img/files/aladin_Category_CID_20210927.xls
  const [query, setQuery] = useState('미래'); //검색어 (문자열) (필수값)
  const [start, setStart] = useState('1'); //검색결과 시작페이지 (1이상 양의정수) (선택값)
  const [maxResults, setMaxResults] = useState('5'); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  const [sort, setSort] = useState('Accuracy');
  const [categoryId, setCategoryId] = useState('0'); //양의정수 - 분야의 고유 번호(기본값:0, 전체) //2173	경영전략/혁신
  const {
    data: bookSearch,
    isLoading,
    isError,
    error
  } = useBookSearchQuery({ query, start, maxResults, sort, categoryId });
  useEffect(() => {
    if (bookSearch) {
      // console.log('bookSearch', bookSearch);
    }
  }, [bookSearch]);

  // ////////////////////////////// 2. 상품 리스트 API //ItemList.aspx //////////////////////////////
  // // QueryType (*필수값)
  // //   ㄴ Bestseller : 베스트셀러
  // //   ㄴ ItemNewAll : 신간 전체 리스트
  // //   ㄴ ItemNewSpecial : 주목할 만한 신간 리스트
  // //   ㄴ ItemEditorChoice : 편집자 추천 리스트 (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
  // //   ㄴ BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능)
  // // start : 1이상, 양의 정수(기본값:1)           //검색결과 시작페이지
  // // MaxResults : 1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  // // CategoryId : 양의정수 - 분야의 고유 번호(기본값:0, 전체) (참고 : 알라딘 모든 분야 카테고리) 특정 분야로 검색결과를 제한함
  // // 알라딘카테고리파일url : https://image.aladin.co.kr/img/files/aladin_Category_CID_20210927.xls
  // const [start, setStart] = useState('1');
  // const [maxResults, setMaxResults] = useState('50');
  // const [categoryId, setCategoryId] = useState('0'); //2173	경영전략/혁신
  // const [querytype, setQuerytype] = useState('Bestseller'); //베스트셀러
  // const { data: bookList, isLoading, isError, error } = useBookListQuery({ querytype, start, maxResults, categoryId });
  // useEffect(() => {
  //   if (bookList) {
  //     console.log('bookList', bookList);
  //   }
  // }, [bookList]);

  // ////////////////////////////// 3. 상품 조회 API //ItemLookUp.aspx  //////////////////////////////
  // // isbn : 상품을 구분짓는 유일한 값 (필수값)
  // //const {isbn} = useParams(); //실제 페이지 이동시에는 app.js에서 선언한값으로 <Route path=":isbn" element= {<BookDetailPage />} />
  // const [isbn, setIsbn] = useState('K272938139'); //테스트 isbn코드 //블변의법칙isbn "K272938139"
  // const { data: bookDetail, isLoading, isError, error } = useBookDetailQuery({ isbn });
  // useEffect(() => {
  //   if (bookDetail) {
  //     console.log('bookDetail', bookDetail);
  //   }
  // }, [bookDetail]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <S.BannerLayout>
      <div>Data loaded successfully!</div>
      <S.Title>배너제목</S.Title>
      <S.Content>내용입니다</S.Content>
    </S.BannerLayout>
  );
}
