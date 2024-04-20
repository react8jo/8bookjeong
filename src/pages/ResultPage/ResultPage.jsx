import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
// import { useBookSearchResultQuery } from '../../hooks/useBookSearchResult';
import { useBookSearchQuery } from '../../hooks/useBookSearch';

import './ResultPage.style.css';
import * as S from './ResultPage.styled';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBookCard from '../../components/ResultPage/SearchBookCard';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Loading from '../../components/common/Loading/Loading';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const displayOptions = [
  { displayName: '10개', apiName: 10 },
  { displayName: '20개', apiName: 20 },
  { displayName: '30개', apiName: 30 }
];

const sortOptions = [
  { displayName: '관련도', apiName: 'Accuracy' },
  { displayName: '출간일', apiName: 'PublishTime' },
  { displayName: '제목', apiName: 'Title' },
  { displayName: '판매량', apiName: 'SalesPoint' },
  { displayName: '고객평점', apiName: 'CustomerRating' },
  { displayName: '마이리뷰갯수', apiName: 'MyReviewCount' }
];

export default function ResultPage() {
  const [q, setQuery] = useSearchParams();
  const [sortOption, setSortOption] = useState('Accuracy');
  const [activeSortIndex, setActiveSortIndex] = useState(0);
  const [maxOption, setMaxOption] = useState(10);
  const [activeMaxSortIndex, setMaxSortIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [startPage, setStartPage] = useState(2);
  const [endPage, setEndPage] = useState(7);

  const query = q.get('query');
  const start = q.get('start');
  const sort = q.get('sort');
  const maxResults = q.get('maxResults');

  const navigate = useNavigate();

  //const { data, isLoading, isError } = useBookSearchResultQuery({ query, start, maxResults, sort });

  //api호출수정//////////////////////////////////////////////////////////////////////////////////////
  ////////////// 1. 상품 검색 API 테스트 //ItemSearch.aspx /////////////////
  // import { useBookSearchQuery } from "../../../../hooks/useBookSearch";
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
  // const [query, setQuery] = useState("미래");        //검색어 (문자열) (필수값)
  // const [start, setStart] = useState("1");           //검색결과 시작페이지 (1이상 양의정수) (선택값)
  // const [maxResults, setMaxResults] = useState("5"); //1이상 100d이하 양의정수 기본값1 //검색결과 한페이지당 최대 출력개수
  // const [sort, setSort] = useState("Accuracy");
  // const [categoryId, setCategoryId] = useState("0");  //양의정수 - 분야의 고유 번호(기본값:0, 전체) //2173	경영전략/혁신
  // const {data,isLoading,isError,error} = useBookSearchQuery({query, start, maxResults, sort, categoryId});
  const [categoryId] = useState('0');
  const { data, isLoading, isError } = useBookSearchQuery({ query, start, maxResults, sort, categoryId });
  //api호출수정////////////////////////////////////////////////////////////////////////////////////////////

  console.log('ResultPage ', data);

  const handleSortItemClick = (item, index) => {
    setSortOption(item.apiName);
    setActiveSortIndex(index);

    setPage(1);
    setStartPage(2);
    setEndPage(7);
  };

  const handleMaxItemClick = (item, index) => {
    setMaxOption(item.apiName);
    setMaxSortIndex(index);
  };

  useEffect(() => {
    navigate(`/result/?query=${query}&start=${page}&sort=${sortOption}&maxResults=${maxOption}`);
  }, [sortOption, maxOption, navigate, query, page]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NotFoundPage />;
  }

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (
      Math.ceil(data.totalResults / data.itemsPerPage) <= endPage &&
      startPage <= Math.ceil(data.totalResults / data.itemsPerPage)
    ) {
      return;
    } else {
      const newStart = startPage + 6;
      const newEnd = endPage + 6;
      setPage(newStart);
      setStartPage(newStart);
      setEndPage(newEnd);
    }
  };

  const handlePrevPage = () => {
    if (startPage === 2) {
      return;
    } else {
      const newStart = startPage - 6;
      const newEnd = endPage - 6;
      setPage(newStart);
      setStartPage(newStart);
      setEndPage(newEnd);
    }
  };

  return (
    <div className='text'>
      <S.SearchCount>
        <h4>
          <S.SearchQuery>{data && data.query}</S.SearchQuery> 검색 결과: 총{' '}
          {data && data.totalResults && data.totalResults.toLocaleString()}건
        </h4>
      </S.SearchCount>
      <S.SortArea>
        <ul>
          {sortOptions.map((item, index) => (
            <S.SortItem
              className={`${index === activeSortIndex ? 'active' : ''}`}
              onClick={() => {
                handleSortItemClick(item, index);
              }}
              key={item.apiName}>
              {item.displayName}
            </S.SortItem>
          ))}
        </ul>
        <DropdownButton
          variant='outline-success'
          id='dropdown-basic-button'
          title={displayOptions[activeMaxSortIndex].displayName}>
          {displayOptions.map((item, index) => (
            <Dropdown.Item key={item.apiName} onClick={() => handleMaxItemClick(item, index)}>
              {item.displayName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </S.SortArea>
      <div>
        <Row>
          {data &&
            data.item &&
            data.item.map((item, index) => (
              <Col key={index} lg={6} sm={12} className='bookCard'>
                <SearchBookCard book={item} />
              </Col>
            ))}
        </Row>
      </div>
      <div className='paginationArea'>
        <span className='pageMove' onClick={handlePrevPage}>
          &#60;
        </span>
        <span className={page === 1 ? 'pageActive' : ''} onClick={() => handlePageChange(1)}>
          1
        </span>
        {startPage !== 2 && <span>...</span>}
        {Array.from(
          { length: Math.min(endPage, Math.ceil(data.totalResults / data.itemsPerPage) - 1) - startPage + 1 },
          (_, i) => {
            const pageNumber = startPage + i;
            return (
              <span
                key={pageNumber}
                className={pageNumber === data.startIndex ? 'pageActive' : ''}
                onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </span>
            );
          }
        )}
        {!(
          Math.ceil(data.totalResults / data.itemsPerPage) <= endPage &&
          startPage <= Math.ceil(data.totalResults / data.itemsPerPage)
        ) && <span>...</span>}
        <span
          className={page === Math.ceil(data.totalResults / data.itemsPerPage) ? 'pageActive' : ''}
          onClick={() => handlePageChange(Math.ceil(data.totalResults / data.itemsPerPage))}>
          {Math.ceil(data.totalResults / data.itemsPerPage)}
        </span>
        <span className='pageMove' onClick={handleNextPage}>
          &#62;
        </span>
      </div>
    </div>
  );
}
