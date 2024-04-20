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
import ReactPaginate from 'react-paginate';

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); //pagination mobile, pc 적용

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
  };

  const handleMaxItemClick = (item, index) => {
    setMaxOption(item.apiName);
    setMaxSortIndex(index);
  };

  useEffect(() => {
    navigate(`/result/?query=${query}&start=${page}&sort=${sortOption}&maxResults=${maxOption}`);
  }, [sortOption, maxOption, navigate, query, page]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NotFoundPage />;
  }

  const totalPages = data ? Math.ceil(data.totalResults / data.itemsPerPage) : 0;

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
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
          variant='outline-success-500'
          className='dropDown'
          id='dropdown-basic-button'
          title={displayOptions[activeMaxSortIndex].displayName}>
          {displayOptions.map((item, index) => (
            <Dropdown.Item key={item.apiName} onClick={() => handleMaxItemClick(item, index)}>
              {item.displayName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </S.SortArea>
      <S.Line />
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
      <S.PaginationArea>
        {/* <ReactPaginate
          nextLabel={isMobile ? '>' : 'next >'}
          onPageChange={handlePageClick}
          pageRangeDisplayed={isMobile ? 2 : 3}
          marginPagesDisplayed={isMobile ? 1 : 2}
          pageCount={totalPages} //전체 페이지
          previousLabel={isMobile ? '<' : '< prev'}
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          renderOnZeroPageCount={null}
          forcePage={page - 1}
        /> */}
        <ReactPaginate
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          pageCount={totalPages}
          onPageChange={handlePageClick}
          pageRangeDisplayed={isMobile ? 2 : 3}
          marginPagesDisplayed={isMobile ? 1 : 2}
          forcePage={start - 1}
          containerClassName='pagination'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          activeClassName='active'
          previousClassName='previous page-item'
          nextClassName='next page-item'
          disabledClassName='disabled'
          breakLinkClassName='page-link'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
        />
      </S.PaginationArea>
    </div>
  );
}
