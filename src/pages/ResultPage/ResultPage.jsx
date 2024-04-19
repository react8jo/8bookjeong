import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useBookSearchResultQuery } from '../../hooks/useBookSearchResult';

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

  const query = q.get('query');
  const start = q.get('start');
  const sort = q.get('sort');
  const maxResults = q.get('maxResults');

  const navigate = useNavigate();

  const { data, isLoading, isError } = useBookSearchResultQuery({ query, start, maxResults, sort });

  const handleSortItemClick = (item, index) => {
    setSortOption(item.apiName);
    setActiveSortIndex(index);
  };

  const handleMaxItemClick = (item, index) => {
    setMaxOption(item.apiName);
    setMaxSortIndex(index);
  };

  useEffect(() => {
    navigate(`/result/?query=${query}&start=1&sort=${sortOption}&maxResults=${maxOption}`);
  }, [sortOption, maxOption, navigate, query]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <NotFoundPage />;
  }

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
    </div>
  );
}
