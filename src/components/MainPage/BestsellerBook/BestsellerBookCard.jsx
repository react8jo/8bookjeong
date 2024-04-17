import React from 'react';
import './BestsellerBookCard.style.css';
// import { useNavigate } from 'react-router-dom';

const BestsellerBookCard = ({ book, rank, isUpComing }) => {
  // 각각의 책 isbn에 맞는 상세 페이지로 이동
  // const navigate = useNavigate();
  // const goToBookDetailPage = (movieId)isbn=> {
  //   navigate(`/books/${isbn}`);
  // };

  return (
    <div
      className='BestsellerBookCard'
      style={{
        backgroundImage: `url(${book.cover})`
        // backgroundPosition: 'right' // 이 부분을 추가
      }}
      // onClick={() => goToBookDetailPage(book.isbn)}>
    >
      {rank && <h4 className='ranking'>{rank}</h4>}
      <div className='overlay'>{/* <h5>{book.title}</h5> */}</div>
    </div>
  );
};

export default BestsellerBookCard;
