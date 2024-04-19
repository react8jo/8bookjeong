import React, { useEffect, useState } from 'react';
import './NewBookCard.style.css';
import { useNavigate } from 'react-router-dom';

// const ChoiceBookCard = ({ book, rank, isUpComing }) => {
const NewBookCard = ({ book }) => {
  const navigate = useNavigate();

  const goToBookDetailPage = (isbn) => {
    console.log(book); // 콘솔에 도서 정보 출력
    navigate(`/products/${isbn}`);
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
        }}
        onClick={() => goToBookDetailPage(book.isbn)}>
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
