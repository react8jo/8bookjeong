import React from 'react';
import { useState, useEffect } from 'react';

import './ResultPage.style.css';
import BookCard from '../../components/ResultPage/BookCard';

import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

export default function ResultPage() {
  const [query, setQuery] = useSearchParams();
  const [sortOption, setSortOption] = useState('Accuracy');
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(2);
  const [end, setEnd] = useState(7);

  const keyword = query.get('q');

  const TTBKey = 'ttbjjari910105001';

  const getBookInfo = async () => {
    axios
      .get(
        `/ttb/api/ItemSearch.aspx?ttbkey=${TTBKey}&Query=${keyword}&QueryType=Keyword&Output=JS&MaxResults=10&Cover=Big&Start=${page}&Version=20131101&Sort=${sortOption}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setSortOption('Accuracy');
    setPage(1);
    getBookInfo();
  }, [keyword]);

  useEffect(() => {
    setPage(1);
    getBookInfo();
  }, [sortOption]);

  useEffect(() => {
    getBookInfo();
  }, [page]);

  console.log('ResultPage ', data);

  const sortOptions = [
    { displayName: '관련도', apiName: 'Accuracy' },
    { displayName: '출간일', apiName: 'PublishTime' },
    { displayName: '제목', apiName: 'Title' },
    { displayName: '판매량', apiName: 'SalesPoint' },
    { displayName: '고객평점', apiName: 'CustomerRating' },
    { displayName: '마이리뷰갯수', apiName: 'MyReviewCount' }
  ];

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setPage(pageNumber);
  };

  const handleNextPage = () => {
    if (end === Math.floor(data.totalResults / data.itemsPerPage)) {
      return;
    } else {
      setPage(start + 6);
      setStart(start + 6);
      setEnd(end + 6);
    }
  };

  const handlePrevPage = () => {
    if (start === 2) {
      return;
    } else {
      setPage(start - 6);
      setStart(start - 6);
      setEnd(end - 6);
    }
  };

  return (
    <div>
      <div className='searchCount'>
        <h4>
          {data && data.query} 검색 결과: 총 {data && data.totalResults}건
        </h4>
      </div>
      <div className='sortArea'>
        <ul className='sortItems'>
          {sortOptions.map((item, index) => (
            <li
              className={`sortItem ${index === 0 ? 'active' : ''}`}
              onClick={(event) => {
                const sortItems = document.querySelectorAll('.sortItem');
                sortItems.forEach((element, idx) => {
                  if (idx === index) {
                    element.classList.add('active');
                  } else {
                    element.classList.remove('active');
                  }
                });
                console.log(item.apiName);
                setSortOption(item.apiName);
              }}
              key={item.apiName}>
              {item.displayName}
            </li>
          ))}
        </ul>
      </div>
      <div className='resultsArea'>
        {data.item && data.item.map((item, index) => <BookCard book={item} key={index} />)}
      </div>
      <div className='pagenationArea'>
        <span onClick={() => handlePrevPage()}>&#60;</span>
        <span className={page === 1 ? 'pageActive' : ''} onClick={() => handlePageChange(1)}>
          {1}
        </span>
        {start !== 2 && <span>...</span>}
        {Array.from({ length: end - start + 1 }, (_, i) => {
          const pageNumber = start + i;
          return (
            <span
              key={pageNumber}
              className={pageNumber === data.startIndex ? 'pageActive' : ''}
              onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </span>
          );
        })}
        {end !== Math.ceil(data.totalResults / data.itemsPerPage) && <span>...</span>}
        <span onClick={() => handlePageChange(Math.ceil(data.totalResults / data.itemsPerPage))}>
          {Math.ceil(data.totalResults / data.itemsPerPage)}
        </span>
        <span onClick={() => handleNextPage()}>&#62;</span>
      </div>
      <div className='space'></div>
    </div>
  );
}
