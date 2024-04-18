import React, { useEffect, useState } from 'react';
import './NewBookCard.style.css';
// import { useNavigate } from 'react-router-dom';

// const ChoiceBookCard = ({ book, rank, isUpComing }) => {
const NewBookCard = ({ book }) => {
  // 각각의 책 isbn에 맞는 상세 페이지로 이동
  // const navigate = useNavigate();
  // const goToBookDetailPage = (movieId)isbn=> {
  //   navigate(`/books/${isbn}`);
  // };

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
      setTitle(getSubstringBeforeWord(book?.title, ' -'));
      setAuthor(getSubstringBeforeWord(book?.author, '(지은이)'));
    }
  }, [book]);

  return (
    <div className='NewBookCard'>
      <div
        className='NewBookCardimg'
        style={{
          backgroundImage: `url(${book?.cover})`
        }}>
        <h4 className='newBookTag'>NEW</h4>
      </div>
      <div>
        <div className='book-title'>{title}</div>
        <div className='book-author'>{author}</div>
      </div>
    </div>
  );
};

export default NewBookCard;
