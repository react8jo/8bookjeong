import React, { useEffect, useState } from 'react';
import './BestsellerBookCard.style.css';
import { useNavigate } from 'react-router-dom';

const BestsellerBookCard = ({ book, rank, isUpComing }) => {
  useEffect(() => {
    console.log('Book props in BestsellerBookCard:', book);
  }, [book]);
  const navigate = useNavigate();

  const goToBookDetailPage = (isbn) => {
    console.log(book); // 콘솔에 도서 정보 출력
    navigate(`/books/${isbn}`);
  };

  function getSubstringBeforeWord(inputString, word) {
    let index = inputString.indexOf(word);
    if (index !== -1) {
      return inputString.substring(0, index);
    } else {
      // 단어를 찾지 못한 경우 전체 문자열 반환
      return inputString;
    }
  }

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(getSubstringBeforeWord(book.title, ' -'));
      setAuthor(getSubstringBeforeWord(book.author, '(지은이)'));
    }
  }, [book]);

  return (
    <div className='BestsellerBookCard'>
      <div
        className='BestsellerBookCardimg'
        style={{
          backgroundImage: `url(${book.cover})`
        }}
        onClick={() => goToBookDetailPage(book.isbn)}>
        {rank && <h4 className='ranking'>{rank}</h4>}
        <div className='overlay'>{/* <h5>{book.title}</h5> */}</div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-author'>{author}</div>
    </div>
  );
};

export default BestsellerBookCard;
